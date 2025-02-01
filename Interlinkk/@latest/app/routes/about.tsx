import { About } from "../about/about";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Interlinkgen" },
  ];
}

export default function AboutUs() {
  return (
    <About />
  );
}
