import { Landscape } from "@/components/landscape/Landscape";
import { SceneCopyright, SceneLegal, SceneTop } from "@/components/landscape/SceneText";

export default function Home() {
  return <Landscape top={<SceneTop />} legal={<SceneLegal />} copyright={<SceneCopyright />} />;
}
