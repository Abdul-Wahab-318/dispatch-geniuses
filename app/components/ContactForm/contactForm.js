import React from "react"

export default function ContactForm() {
  return (
    <div className="form rounded-lg form-box-shadow my-10">
      <div className="form__title h4 text-5xl">Contact us for free setup</div>
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
          <div style={{ display: "none" }}>
            <input type="hidden" name="_wpcf7" defaultValue={88} />
            <input type="hidden" name="_wpcf7_version" defaultValue="5.9.8" />
            <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
            <input
              type="hidden"
              name="_wpcf7_unit_tag"
              defaultValue="wpcf7-f88-o1"
            />
            <input
              type="hidden"
              name="_wpcf7_container_post"
              defaultValue={0}
            />
            <input
              type="hidden"
              name="_wpcf7_posted_data_hash"
              defaultValue=""
            />
            <input
              type="hidden"
              name="_wpcf7_recaptcha_response"
              defaultValue=""
            />
          </div>
          <input
            className="wpcf7-form-control wpcf7-hidden"
            defaultValue="main form"
            type="hidden"
            name="form"
          />
          <input
            className="wpcf7-form-control wpcf7-hidden"
            defaultValue="logitydispatch"
            type="hidden"
            name="mode"
          />
          <input
            className="wpcf7-form-control wpcf7-hidden"
            defaultValue=""
            type="hidden"
            name="utm"
          />
          <span
            id="wpcf7-66ffeb08e1f43-wrapper"
            className="wpcf7-form-control-wrap honeypot-966-wrap"
            style={{
              display: "none !important",
              visibility: "hidden !important",
            }}
          >
            <input
              type="hidden"
              name="honeypot-966-time-start"
              defaultValue={1728047880}
            />
            <input
              type="hidden"
              name="honeypot-966-time-check"
              defaultValue={2}
            />
            <input
              id="wpcf7-66ffeb08e1f43-field"
              className="wpcf7-form-control wpcf7-text"
              type="text"
              name="honeypot-966"
              defaultValue=""
              size={40}
              tabIndex={-1}
              autoComplete="off"
            />
          </span>
          <input
            className="wpcf7-form-control wpcf7-hidden"
            defaultValue=""
            type="hidden"
            name="url"
          />
          <input
            className="wpcf7-form-control wpcf7-hidden"
            defaultValue=""
            type="hidden"
            name="googleclientid"
          />
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
          <div className="form-check">
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
            <span className="form-check-label p2 mt-[-3px] ">
              I have read and agree to{"  "}
              <a href="terms-of-service/index.html">Terms of Service</a>
            </span>
          </div>
          <div className="form-check subscribing">
            <span
              className="wpcf7-form-control-wrap"
              data-name="consent-subscribe"
            >
              <span className="wpcf7-form-control wpcf7-acceptance optional ">
                <span className="wpcf7-list-item">
                  <input
                    type="checkbox"
                    name="consent-subscribe"
                    defaultValue={1}
                    defaultChecked="checked"
                    aria-invalid="false"
                  />
                </span>
              </span>
            </span>
            <span className="form-check-label p2 mt-[-3px] ">
              I want to receive the most useful tips and news
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
