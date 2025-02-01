import { Introduction } from "~/components/introduction";
import { Goals } from "~/components/goals";
import { Values } from "~/components/values";
import { Button } from "../components/ui/button";
import { Navbar } from "~/components/navbar";
import { Closing } from "~/components/closing";
export function Welcome() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Goals />
      <Values />
      <Closing />
      
    </>
  );
}
