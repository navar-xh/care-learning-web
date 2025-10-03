import React from "react";
import "./index.css";
import { footerLinks } from "@/data/FooterLinks";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="logo-col pb-10">
          <Link href="/" className="footer-logo">
            Care Learning
          </Link>
        </div>
        <div className="footerRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="footerMenu menuOne flex justify-end flex-col">
            {footerLinks.link_one.map((link) => (
              <li key={link.id}>
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </div>
          <div className="footerMenu menuTwo">
            <h4>Community</h4>
            {footerLinks.link_two.map((link) => (
              <li key={link.id}>
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </div>
          <div className="footerMenu menuTwo">
            <h4>More</h4>
            {footerLinks.link_three.map((link) => (
              <li key={link.id}>
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </div>
          <div className="footerMenu menuTwo">
            <h4>Download</h4>
            <div className="btn-col">
              <div className="btn-download">
                <Link href="/" className="gradient-border">
                  <Image
                    src="/images/btn-gplay.svg"
                    alt="Carelearning"
                    width={100}
                    height={55}
                  />
                </Link>
              </div>
              <div className="btn-download ">
                <Link href="/" className="gradient-border">
                  <Image
                    src="/images/btn-apple.svg"
                    alt="Carelearning"
                    width={100}
                    height={55}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyTxt flex items-center justify-between">
          <p>Copyright © 2025 Care Learning . All Rights Reserved.</p>
          <ul className="social-menu flex items-center">
            <li>
              <Link href="/" className="">
                <Image
                  src="/images/icons/icon-fb.svg"
                  alt="Carelearning"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                <Image
                  src="/images/icons/icon-yt.svg"
                  alt="Carelearning"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                <Image
                  src="/images/icons/icon-instagram.svg"
                  alt="Carelearning"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                <Image
                  src="/images/icons/icon-linkedin.svg"
                  alt="Carelearning"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                <Image
                  src="/images/icons/icon-x.svg"
                  alt="Carelearning"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
