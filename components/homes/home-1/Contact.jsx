"use client";

import AnimatedText from "@/components/common/AnimatedText";
import { config } from "@/config";
import Image from "next/image";
import React from "react";

export default function Contact() {
  async function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!message) {
      alert("Please enter your message");
      return;
    }

    alert(
      "Thank you for reaching out, a member of our team will get back to you soon."
    );

    try {
      await fetch(
        `https://api.sassywares.com/contact?referrerId=${config.id}&formTypeId=${config.formTypeIds.contactForm}`,
        {
          body: JSON.stringify({
            name,
            email,
            message,
          }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6">
          <div className="row mb-50">
            <div className="col-lg-10">
              <h2 className="section-caption mb-xs-10">Contact Us</h2>
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  <AnimatedText text="Let's give your space some soul." />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="col-md-6 mb-sm-50">
          {/* Contact Form */}
          <form
            id="contact_form"
            onSubmit={onFormSubmit}
            className="form contact-form pe-lg-5"
          >
            <div className="row">
              <div className="col-lg-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Enter your message"
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col-lg-5">
                {/* Send Button */}
                <div className="pt-20">
                  <button
                    className="submit_btn btn btn-mod btn-large btn-round btn-hover-anim"
                    id="submit_btn"
                    aria-controls="result"
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-7">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0 mt-sm-20">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <Image
            src="/assets/images/contact.jpg"
            alt="Contact Map"
            width={600}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
