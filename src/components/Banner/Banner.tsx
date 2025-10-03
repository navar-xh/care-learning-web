import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section className="banner-sec">
      <div className="container mx-auto">
        <h1 className="text-center">
          <span>Join the</span> care learning <br />
          <span>community</span>
        </h1>
        <div className="btn-row flex items-center justify-center gap-4">
          <Link href="" className="primary-btn transition-all duration-300 ease-in hover:scale-105">
            Talk to us
          </Link>
          <Link href="" className="primary-btn transition-all duration-300 ease-in hover:scale-105">
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
