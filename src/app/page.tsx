import { Landscape } from "@/components/landscape/Landscape";
import { SceneCopyright, SceneTop } from "@/components/landscape/SceneText";

export default function Home() {
  return <Landscape top={<SceneTop />} copyright={<SceneCopyright />} />;
}
