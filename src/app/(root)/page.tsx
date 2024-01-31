import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      {/* ************ hero section **************** */}
      <section>
        <div className="p-5 flex-col md:flex  md:flex-row items-center">
          <div className="mt-10 md:mx-10 lg:mx-16 ">
            <h2 className="font-extrabold text-6xl">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h2>
            <p className="text-2xl mt-4 text-gray-800">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button asChild className="mt-5 w-40 rounded-full">
              <Link href="/">Create Event </Link>
            </Button>
          </div>
          <div className="p-10 -mt-10"> 
            <Image
              src={"/assets/images/hero.png"}
              alt={"evently logo"}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/* body section */}
      <section>
        <div className=" p-10 lg:mx-16">
        <h2 className="font-semibold text-xl ">Trusted by <br /> Thousands of companies </h2>
        </div>
      </section>

    </main>
  );
}
