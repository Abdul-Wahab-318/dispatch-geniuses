"use client"
import React , {useState} from "react"
import { useForm, ValidationError } from '@formspree/react';
import './styles.css'

export default function ContactForm({mc , truckType}) {

  const [state, handleSubmit] = useForm("mldejjkv");
  const [email , setEmail] = useState("")
  const [name , setName] = useState("")
  const [phone , setPhone] = useState("")
  const [MC_DOT , setMC_DOT] = useState("")
  const [error , setError] = useState(false)
  
  const validate = () =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?\d+$/

    if(!emailRegex.test(email))
    {
      setError("Please enter a valid email")
      return false
    }

    if( !phoneRegex.test(phone) || !( phone.length > 6 && phone.length < 20 ) )
    {
      setError("Please enter a valid phone number")
      return false
    }

    //numeric of length 3-7
    if( !/^\d{3,7}$/.test(MC_DOT) )
    {
      setError("Please enter a valid MC or DOT number (3-7 digits)")
      return false
    }

    if(name !== '' && phone !== '')
    {
      setError(false)
      return true
    }
    else{
      setError("Please enter missing information")
      return false
    }
  }

  const submitForm = (e) =>{
    e.preventDefault()
    if(!validate())
      return

    handleSubmit(e)
  }

  if (state.succeeded) {
      return <p className="text-5xl font-bold text-center p-8 rounded-lg bg-white   ">Your message has been sent!</p>;
  }

  return (
    <div className="form rounded-lg form-box-shadow h-full w-full">
      <div className="form__title h4 text-5xl mb-8">Contact us for free setup</div>
      <div className="wpcf7 no-js" id="wpcf7-f88-o1" lang="en-US" dir="ltr">
        <div className="screen-reader-response">
          <p role="status" aria-live="polite" aria-atomic="true" />
          <ul />
        </div>
        <form
          onSubmit={submitForm}
          className="wpcf7-form init"
          aria-label="Contact form"
          noValidate="novalidate"
        > 
          <div className="form__row row">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label p2">
                Full name
              </label>
              <span className="wpcf7-form-control-wrap">
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control p2"
                  id="name"
                  aria-required="true"
                  aria-invalid="false"
                  type="text"
                  name="name"
                />
              </span>
            </div>

            <div className="col-12 col-md-6 ">
              <label htmlFor="phone" className="form-label p2">
                Phone number
              </label>
              <span className="wpcf7-form-control-wrap" data-name="phone">
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel phone form-control p2"
                  id="phone"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="+1 (___) ___-__-__"
                  type="tel"
                  name="phone"
                />
              </span>
            </div>
          </div>

          <div className="form__row row">
            <div className="col-12 col-md-6 ">
              <label htmlFor="MC_DOT" className="form-label p2">
                MC/DOT Number
              </label>
              <span className="wpcf7-form-control-wrap">
                <input
                onChange={e => setMC_DOT(e.target.value)}
                  size={40}
                  maxLength={7}
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control p2"
                  id="MC_DOT"
                  aria-required="true"
                  aria-invalid="false"
                  defaultValue={MC_DOT}
                  type="number"
                  name="MC_DOT"
                />
              </span>
            </div>
            <div className="col-12 col-md-6  ">
              <label htmlFor="email" className="form-label p2">
                Email
              </label>
              <span className="wpcf7-form-control-wrap">
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control p2"
                  id="email"
                  aria-required="true"
                  aria-invalid="false"
                  type="email"
                  name="email"
                />
              </span>
            </div>
          </div>

          <div className="hidden md:block form-check pt-4 pb-0 flex items-center">
            <span className="wpcf7-form-control-wrap" data-name="consent">
              <span className="wpcf7-form-control wpcf7-acceptance">
                <span className="wpcf7-list-item m-0">
                  <input
                    type="checkbox"
                    name="consent"
                    defaultValue={1}
                    defaultChecked={true}
                    aria-invalid="false"
                  />
                </span>
              </span>
            </span>
            <span className="form-check-label p2 text-[12px] lg:text-[13px] ">
              I have read and agree to{"  "}
              <a href="terms-of-service/index.html">Terms of Service</a>
            </span>

          </div>
          <div className="hidden md:block  form-check pt-0 pb-6 flex items-center">
            <span className="wpcf7-form-control-wrap" data-name="consent">
              <span className="wpcf7-form-control wpcf7-acceptance">
                <span className="wpcf7-list-item m-0">
                  <input
                    type="checkbox"
                    name="sms"
                    defaultValue={1}
                    defaultChecked={true}
                    aria-invalid="false"
                  />
                </span>
              </span>
            </span>
            <span className="form-check-label p2 text-[12px] lg:text-[13px] ">
            Agree to SMS text message. Message & data rates may apply.  You can reply STOP to opt-out of further messaging
            </span>
          </div>
          <button className="btn btn-lg btn-danger py-[1.3rem] px-[3rem]" type="submit">
            Send Request
          </button>

          {
           state.errors?.formErrors.map(error => <p className="text-red font-bold mt-8 mb-0">{error.message}</p> )
          }
          {
            <p className="text-red-500 font-bold mt-8 mb-0">{error}</p>
          }
          <div className="wpcf7-response-output" aria-hidden="true" />
        </form>
      </div>
    </div>
  )
}
