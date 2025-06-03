"use client";
import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";
import { services } from "@/data/services";

export default function Footer1({ dark = false }) {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      }  pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={"/"} className="mb-30">
              <Image
                src="/assets/images/logo.svg"
                width={105}
                height={34}
                className="light-mode-logo"
                alt="Motif Studio Logo"
              />

              <Image
                src="/assets/images/logo.svg"
                width={105}
                height={34}
                className="dark-mode-logo"
                alt="Motif Studio Logo"
              />
            </Link>
            <p className="mt-4">
              Motif creates timeless interiors that blend French elegance with
              contemporary design.
            </p>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Company</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Services</h3>
                <ul className="fw-menu clearlist">
                  {services.map((elm, i) => (
                    <li key={i}>
                      <a href="/#services">{elm.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal &amp; Press</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <Link href={elm.path}>{elm.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b>© Motif {new Date().getFullYear()}.</b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>Based in Paris, France.</b>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
        <div className="d-flex gap-2 align-items-center justify-content-end mt-4">
          Site by
          <a href="https://sassywares.com" target="_blank" rel="noopener">
            <img
              src="https://storage.sassywares.com/badge.png"
              alt="sassywares creative web design development agency"
              width="150"
              className="mt-2"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
