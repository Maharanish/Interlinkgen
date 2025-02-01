import { Events } from "~/events/events";
import type { Route } from "./+types/events";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Interlinkgen" },
  ];
}

export default function About() {
  return (
    <Events />
  );
}
