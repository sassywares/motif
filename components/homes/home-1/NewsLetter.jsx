"use client";

import { config } from "@/config";
import Link from "next/link";

export default function NewsLetter() {
  async function onFormSubmit(e) {
    e.preventDefault();

    const email = e.target["newsletter-email"].value;

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Thank you for subscribing, we'll be in touch soon.");

    try {
      await fetch(
        `https://api.sassywares.com/newsletter?referrerId=${config.id}&formTypeId=${config.formTypeIds.newsletterForm}`,
        {
          body: JSON.stringify({ email }),
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
        <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3 wow fadeInUp">
          <h2 className="section-title-small text-center mb-40">
            The very best in French design.
          </h2>
          <form onSubmit={onFormSubmit} className="form">
            <div className="d-sm-flex justify-content-between mb-20">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Your email
              </label>
              <input
                placeholder="Enter your email"
                className="newsletter-field input-lg round"
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                pattern=".{5,100}"
                required
                aria-required="true"
              />
              <button
                type="submit"
                aria-controls="subscribe-result"
                className="newsletter-button btn btn-mod btn-w btn-large btn-round btn-hover-anim"
              >
                <span>Subscribe Now</span>
              </button>
            </div>
            <div className="form-tip">
              <i className="icon-info size-16" /> By sending the form you agree
              to the{" "}
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>{" "}
              and <Link href="/privacy-policy">Privacy Policy</Link>.
            </div>
            <div
              id="subscribe-result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
