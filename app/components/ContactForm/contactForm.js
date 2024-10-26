import React from "react"

export default function ContactForm() {
  return (
    <div className="form rounded-lg form-box-shadow h-full">
      <div className="form__title h4 text-5xl mb-8">Contact us for free setup</div>
      <div className="wpcf7 no-js" id="wpcf7-f88-o1" lang="en-US" dir="ltr">
        <div className="screen-reader-response">
          <p role="status" aria-live="polite" aria-atomic="true" />
          <ul />
        </div>
        <form
          action="https://logitydispatch.com/#wpcf7-f88-o1"
          method="post"
          className="wpcf7-form init"
          aria-label="Contact form"
          noValidate="novalidate"
          data-status="init"
        > 
          <div className="form__row">
            <label htmlFor="name" className="form-label p2">
              Full name
            </label>
            <span className="wpcf7-form-control-wrap" data-name="fullname">
              <input
                size={40}
                maxLength={400}
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control p2"
                id="name"
                aria-required="true"
                aria-invalid="false"
                defaultValue=""
                type="text"
                name="fullname"
              />
            </span>
          </div>
          <div className="form__row">
            <label htmlFor="phone" className="form-label p2">
              Phone number
            </label>
            <span className="wpcf7-form-control-wrap" data-name="phone">
              <input
                size={40}
                maxLength={400}
                className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel phone form-control p2"
                id="phone"
                aria-required="true"
                aria-invalid="false"
                placeholder="+1 (___) ___-__-__"
                defaultValue=""
                type="tel"
                name="phone"
              />
            </span>
          </div>
          <div className="form__row">
            <label htmlFor="email" className="form-label p2">
              Email
            </label>
            <span className="wpcf7-form-control-wrap" data-name="email">
              <input
                size={40}
                maxLength={400}
                className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control p2"
                id="email"
                aria-required="true"
                aria-invalid="false"
                defaultValue=""
                type="email"
                name="email"
              />
            </span>
          </div>
          <div className="form-check pt-4 pb-6">
            <span className="wpcf7-form-control-wrap" data-name="consent">
              <span className="wpcf7-form-control wpcf7-acceptance">
                <span className="wpcf7-list-item">
                  <input
                    type="checkbox"
                    name="consent"
                    defaultValue={1}
                    aria-invalid="false"
                  />
                </span>
              </span>
            </span>
            <span className="form-check-label p2 mt-[-3px] text-[12px] lg:text-[13px] ">
              I have read and agree to{"  "}
              <a href="terms-of-service/index.html">Terms of Service</a>
            </span>
          </div>
          <button className="btn btn-lg btn-danger" type="submit">
            Send Request
          </button>
          <div className="wpcf7-response-output" aria-hidden="true" />
        </form>
      </div>
    </div>
  )
}
