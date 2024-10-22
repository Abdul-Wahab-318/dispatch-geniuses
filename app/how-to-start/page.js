"use client"

import React, { useRef } from "react"
import { Stepper } from "primereact/stepper"
import { StepperPanel } from "primereact/stepperpanel"
import { Button } from "primereact/button"
import { PrimeReactProvider } from "primereact/api"
import "primereact/resources/themes/lara-light-cyan/theme.css"
import 'primeicons/primeicons.css';
import Link from "next/link"
import "./styles.css"
import PageHeader from "../components/PageHeader/pageHeader"
import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function HowToStart() {

  return (
    <PrimeReactProvider>
      <div className="main-wrapper">
        <PageHeader img_url="/images/about-header.webp" />
        <div className="container breadcrumbs-container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs">
                <span>
                  <span>
                    <Link href="/" className="text-3xl me-2">
                      Home
                    </Link>
                  </span>{" "}
                  <span className="text-4xl">»</span>
                  <span
                    className="breadcrumb_last ms-2 text-3xl"
                    aria-current="page"
                  >
                    How to start
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div div className="row mt-12">
            <h1 className="text-7xl">How To Get Started</h1>
          </div>
          <StepperComponent />
        </div>
      </div>
    </PrimeReactProvider>
  )
}


function StepperComponent() {
  const stepperRef = useRef(null)
  const trucks = [
    "Dry Van",
    "Step Deck",
    "Reefer",
    "Flatbed",
    "Power Only",
    "Hotshot",
    "Boxtruck",
    "Other",
  ]
  return (
    <div className="card flex justify-content-center my-8 w-full">
      <Stepper ref={stepperRef} className="text-4xl w-full">
        <StepperPanel header="Step I" className="text-5xl w-full">
          <div className="flex flex-column h-12rem">
            <div className="content-wrapper font-medium text-5xl">
              <div className="carousel-item_">
                <h2 className="step-heading text-6xl">Step 1</h2>
                <h3 className="text-4xl sm:text-5xl lg:text-4xl mt-5">
                  Before we hit the road together, make sure you have the basics
                  covered!
                </h3>
                <ul
                  className="text-4xl sm:text-5xl lg:text-4xl font-semibold ms-2 mt-4"
                  style={{ listStyle: "disc" }}
                >
                  <li>
                    <span className="font-semibold">
                      {" "}
                      Have you had your MC# for more than 3 months?{" "}
                    </span>
                    <form action="" className="my-4">
                      <input type="radio" name="q1" id="yes" />
                      <label htmlFor="yes">Yes</label>

                      <input type="radio" name="q1" id="no" className="ms-5" />
                      <label htmlFor="no">No</label>
                    </form>
                  </li>
                  <li className="mt-8">
                    <span className="font-semibold ">
                      {" "}
                      What type of truck do you have?{" "}
                    </span>
                    <br />
                    <select
                      name="truck"
                      id="truck"
                      className="border-2 border-blue rounded-md mt-7 px-2"
                    >
                      {trucks.map((el, ind) => (
                        <option value={el.toLowerCase()}>{el}</option>
                      ))}
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex pt-4 justify-content-end">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Step II">
          <div className="flex flex-column h-12rem">
            <div className="content-wrapper font-medium">
              <div className="md:w-3/4 lg:w-1/2 mx-auto mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Step III">
          <div className="flex flex-column h-12rem">
            <div className="content-wrapper font-medium">
              <div className="carousel-item_">
                <h2 className="step-heading text-6xl">Step 3</h2>
                <h3 className="text-4xl sm:text-5xl lg:text-4xl mt-5">
                  Let’s make sure all the paperwork is in order. Here’s what
                  you’ll need,
                </h3>
                <ul
                  className="text-4xl sm:text-5xl lg:text-4xl font-semibold ms-2 mt-4"
                  style={{ listStyle: "disc" }}
                >
                  <li>
                    <span className="font-semibold">W9 Form</span>
                  </li>
                  <li className="mt-8">
                    <span className="font-semibold ">
                      Certificate of Insurance
                    </span>
                  </li>
                  <li className="mt-8">
                    <span className="font-semibold ">MC Authority</span>
                  </li>
                  <li className="mt-8">
                    <span className="font-semibold ">
                      Notice of Assignment for Factoring
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Step IV">
          <div className="flex flex-column h-12rem">
            <div className="content-wrapper font-medium">
            <h2 className="step-heading text-6xl">Step 4</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-4xl mt-5">
                
                Let's Hit the Road! <br />
                Congratulations, you’re all set!
                You’ll receive a call from one of our agents within the next business day.
                
              </h3>
              <div className="text-center flex justify-center my-4">
                <Image src="/images/handshake-1.gif" className="text-center"  width={120} height={120}/>
              </div>
            </div>
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  )
}
