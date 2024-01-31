import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-50">
      <div className="flex items-center justify-center p-5  flex-col sm:flex-row md:justify-between">
        <Link href="/" className="w-36">
          <Image
            src={"/assets/images/logo.svg"}
            alt={"evently logo"}
            width={128}
            height={38}
          />
        </Link>
        <div className="text-center md:text-right p-2">
          <p>Evently 2024. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
