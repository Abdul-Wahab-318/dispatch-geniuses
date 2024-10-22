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
import StepperComponent from "../components/Stepper/stepper"

export default function HowToStart() {

  return (
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
                  Get Started
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div div className="row mt-12">
          <h1 className="text-7xl">Get Started</h1>
        </div>
        <StepperComponent />
      </div>
    </div>
  )
}
