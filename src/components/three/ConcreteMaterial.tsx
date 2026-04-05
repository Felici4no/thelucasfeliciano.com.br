"use client";

import * as THREE from 'three';
import { useMemo } from 'react';

function generateBumpMap() {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.Texture();
  
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 200000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const isHole = Math.random() > 0.6;
    ctx.fillStyle = isHole ? `rgba(0,0,0,0.6)` : `rgba(255,255,255,0.3)`;
    ctx.fillRect(x, y, Math.random() * 1.5, Math.random() * 1.5);
  }

  const bumpTex = new THREE.CanvasTexture(canvas);
  bumpTex.wrapS = THREE.RepeatWrapping;
  bumpTex.wrapT = THREE.RepeatWrapping;
  bumpTex.repeat.set(3, 3);
  bumpTex.anisotropy = 8;
  return bumpTex;
}

const snoiseGLSL = `
// Simplex 3D Noise by Ian McEwan, Ashima Arts
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

float fbm(vec3 x) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100.0);
    for (int i = 0; i < 4; ++i) {
        v += a * snoise(x);
        x = x * 2.0 + shift;
        a *= 0.5;
    }
    return v * 0.5 + 0.5; 
}
`;

export function ConcreteMaterial() {
  const material = useMemo(() => {
    const bumpTex = generateBumpMap();
    
    const mat = new THREE.MeshStandardMaterial({
      color: '#ffffff', 
      roughness: 0.95,  
      metalness: 0.0,   
      bumpMap: bumpTex,
      bumpScale: 0.02,
    });

    mat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        `#include <common>`,
        `#include <common>
         varying vec3 vWorldPosition;
         varying vec3 vLocalPosition;
         varying vec3 vLocalNormal;
        `
      );
      shader.vertexShader = shader.vertexShader.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
         vLocalPosition = position;
         vLocalNormal = normal;
        `
      );
      shader.vertexShader = shader.vertexShader.replace(
        `#include <worldpos_vertex>`,
        `#include <worldpos_vertex>
         vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <common>`,
        `#include <common>
         varying vec3 vWorldPosition;
         varying vec3 vLocalPosition;
         varying vec3 vLocalNormal;
         ${snoiseGLSL}
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <map_fragment>`,
        `#include <map_fragment>
         
         // 1. MACRO VARIATION: Deep, broad sweeps
         float macro = fbm(vWorldPosition * 0.3);
         
         // 2. MEDIUM VARIATION: Organic stains
         float medium = fbm(vWorldPosition * 2.5);

         // 3. MICRO DETAIL: Porosity
         float micro = fbm(vWorldPosition * 30.0);

         // Base concrete palettes (very dark albedo to counteract bright lights)
         vec3 warmDarkGrey = vec3(0.25, 0.23, 0.21);
         vec3 coolDarkGrey = vec3(0.20, 0.21, 0.22);
         vec3 deepGrime = vec3(0.12, 0.11, 0.10);
         vec3 brownStain = vec3(0.18, 0.15, 0.12);
         vec3 lightDust = vec3(0.35, 0.33, 0.31);

         // Calculate base mixing
         vec3 baseColor = mix(coolDarkGrey, warmDarkGrey, smoothstep(0.3, 0.7, macro));

         // Apply brown natural stains organically overlapping
         float brownMask = smoothstep(0.4, 0.8, macro * medium * 1.8);
         baseColor = mix(baseColor, brownStain, brownMask * 0.7);

         // Apply deep grime (dark edges and transitions)
         float grimeMask = smoothstep(0.5, 0.85, fbm(vWorldPosition * 1.5 + vec3(macro)));
         baseColor = mix(baseColor, deepGrime, grimeMask * 0.85);

         // Apply light settling dust
         float dustMask = smoothstep(0.65, 0.95, fbm(vWorldPosition * 0.8));
         baseColor = mix(baseColor, lightDust, dustMask * 0.4);

         // Apply micro detail (heavy pores) using pure noise for sharpness
         float pores = snoise(vWorldPosition * 60.0) * 0.5 + 0.5;
         baseColor = mix(baseColor, vec3(0.02), smoothstep(0.7, 0.95, pores) * 0.6);

         // EDGE TREATMENT (subtle grime accumulation)
         vec3 absNorm = abs(vLocalNormal);
         float isEdge = 1.0 - smoothstep(0.85, 0.99, max(absNorm.x, max(absNorm.y, absNorm.z)));
         float edgeNoise = snoise(vLocalPosition * 8.0) * 0.5 + 0.5;
         baseColor = mix(baseColor, deepGrime * 0.5, isEdge * edgeNoise);

         // CAVITY DARKENING
         float dx1 = (vLocalPosition.x + 0.9) / 0.75;
         float dz1 = (vLocalPosition.z) / 0.65;
         float dist1 = dx1*dx1 + dz1*dz1;

         float dx2 = (vLocalPosition.x - 0.9) / 0.75;
         float dz2 = (vLocalPosition.z) / 0.65;
         float dist2 = dx2*dx2 + dz2*dz2;

         float inHole = step(dist1, 1.3) + step(dist2, 1.3);
         if (inHole > 0.0) {
            float depth = 1.0 - smoothstep(-0.95, 0.8, vLocalPosition.y); 
            float isInsideWall = 1.0 - abs(vLocalNormal.y); 
            float darkness = mix(0.1, 0.95, depth) * isInsideWall;
            baseColor = mix(baseColor, vec3(0.01), darkness);
         }

         diffuseColor = vec4(baseColor, 1.0);
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>
         
         float rFactor = 0.88; 
         // Grime is rougher
         rFactor = mix(rFactor, 0.98, grimeMask);
         
         // Edges might be slightly worn and smoother
         rFactor = mix(rFactor, 0.75, isEdge * 0.3);

         roughnessFactor = clamp(rFactor, 0.0, 1.0);
        `
      );
    };

    return mat;
  }, []);

  return <primitive object={material} attach="material" />;
}
