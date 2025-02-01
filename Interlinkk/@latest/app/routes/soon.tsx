import type { Route } from "./+types/soon";
import { Soon } from "../components/soon";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Interlinkgen" },
  ];
}

export default function Home() {
  return <Soon />;
}
