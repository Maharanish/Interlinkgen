import { Closing } from "~/components/closing";
import { Cover } from "~/components/cover";
import { IGEMP } from "~/components/igemp";
import { Interthinkgen } from "~/components/interthinkgen";
import { IWC } from "~/components/iwc";
import { Navbar } from "~/components/navbar";
export function Events() {
  return (
    <>
      <Navbar /> 
      <Cover />
      <Interthinkgen />
      <IWC />
      <IGEMP />
      <Closing />
    </>
  );
}