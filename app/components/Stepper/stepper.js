"use client"
import React, { useRef, useState } from "react"
import { Stepper } from "primereact/stepper"
import { StepperPanel } from "primereact/stepperpanel"
import { Button } from "primereact/button"
import { PrimeReactProvider } from "primereact/api"
import "primereact/resources/themes/lara-light-cyan/theme.css"
import "primeicons/primeicons.css"
import "./styles.css"
import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function StepperComponent() {
  const [truckType, setTruckType] = useState("")
  const [MC, setMC] = useState("yes")
  let [error, setError] = useState(false)

  const handleRadioChange = (event) => {
    setMC(event.target.id)
  }

  const handleSelectionChange = (event) => {
    console.log(event.target.value)
    setTruckType(event.target.value)
  }

  const validate = () => {
    if (truckType == "") {
      setError("Please select Truck type")
      return false
    }

    return true
  }

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
    <PrimeReactProvider>
      <div className="card flex justify-content-center my-8 w-full">
        <Stepper ref={stepperRef} className="text-4xl w-full stepper-main">
          <StepperPanel header="Step I" className="text-5xl w-full">
            <div className="flex flex-column h-12rem">
              <div className="content-wrapper font-medium text-5xl">
                <div className="carousel-item_">
                  <h2 className="step-heading text-6xl">Step 1</h2>
                  <h3 className="text-[16px] sm:text-5xl lg:text-4xl mt-5 mb-5">
                    Before we hit the road together, make sure you have the
                    basics covered!
                  </h3>
                  <ul
                    className="text-[16px] sm:text-5xl lg:text-4xl font-semibold ms-2 mt-4"
                    style={{ listStyle: "disc" }}
                  >
                    <li>
                      <span className="font-semibold">
                        {" "}
                        Have you had your MC# for more than 3 months?{" "}
                      </span>
                      <form action="" className="my-4">
                        <div className="inline-flex items-center gap-2">
                          <input
                            type="radio"
                            name="q1"
                            id="yes"
                            defaultChecked
                            onChange={handleRadioChange}
                          />
                          <label htmlFor="yes">Yes</label>
                        </div>
                        <div className="inline-flex items-center gap-2">
                          <input
                            type="radio"
                            name="q1"
                            id="no"
                            className="ms-5"
                            onChange={handleRadioChange}
                          />
                          <label htmlFor="no">No</label>
                        </div>
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
                        value={truckType}
                        onChange={handleSelectionChange}
                      >
                        <option value="other">Select a truck</option>
                        {trucks.map((el, ind) => (
                          <option value={el.toLowerCase()} key={el.toLowerCase()}>{el}</option>
                        ))}
                      </select>
                    </li>
                  </ul>
                  {error ? (
                    <p className="text-[#FF0000] font-semibold">{error} </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="flex pt-4 justify-content-end">
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => {
                  if (!validate()) return
                  stepperRef.current.nextCallback()
                }}
              />
            </div>
          </StepperPanel>
          <StepperPanel header="Step II">
            <div className="flex flex-column h-12rem">
              <div className="content-wrapper font-medium">
                <div className="md:w-3/4 lg:w-1/2 mx-auto mt-6">
                  <ContactForm mc={MC} truckType={truckType} />
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
                  <h3 className="text-[16px] sm:text-5xl lg:text-4xl mt-5">
                    Let’s make sure all the paperwork is in order. Here’s what
                    you’ll need,
                  </h3>
                  <ul
                    className="text-[16px] sm:text-5xl lg:text-4xl font-semibold ms-2 mt-4"
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
                <h3 className="text-[16px] sm:text-5xl lg:text-4xl mt-5">
                  Let's Hit the Road! <br />
                  Congratulations, you’re all set! You’ll receive a call from
                  one of our agents within the next business day.
                </h3>
                <div className="text-center flex justify-center my-4">
                  <Image
                    src="/images/handshake-1.gif"
                    className="text-center"
                    width={120}
                    height={120}
                  />
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
    </PrimeReactProvider>
  )
}
