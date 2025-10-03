import Link from "next/link";
// import Image from "next/image";
import React from "react";

function BannerLayout() {
  return (
    <section className="banner-layout">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="layout-img">
            {/* <Image
                src='/images/bg-layout.png'
                alt="Care learning"
                width={800}
                height={800}
            /> */}
          </div>
          <div className="layout-contents">
            <h2>
              Transform Your <br />
              <span>Healthcare Career <br /> with AI!</span>
            </h2>
            <p>
              Create standout resumes and personal statements instantly using
              AI-powered tools designed for healthcare professionals.
            </p>
            <Link
              href=""
              className="primary-btn transition-all duration-300 ease-in hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerLayout;
