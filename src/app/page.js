import Image from "next/image";
import bg from "../../public/background/home-background.png";
import img from "../../public/SR Rony.jpg"
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        {/* <RenderModel> */}
          {/* <Image className="rounded-full w-60 h-60 object-cover" src={img} alt="img"/> */}
          <Wizard/>
        {/* </RenderModel> */}
      </div>
    </main>
  );
}
