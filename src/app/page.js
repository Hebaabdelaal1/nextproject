import Image from "next/image";
import AllUsers from "./home/page";
import Postui from "./postui/page";

export default function Home() {
  return (
    <div className="mt-30">
   <AllUsers />
   {/* <Postui /> */}
    </div>
  );
}
