import Image from "next/image"
import PageHeader from "../components/PageHeader/pageHeader"
import "./style.css"
import Link from "next/link"
import { Faq } from "../components/Faq/faq"

export default function FAQ() {
  return (
    <div className="main-wrapper shipper-broker-page">
      <PageHeader img_url="/images/faq-header.webp" />
      <div className="container breadcrumbs-container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumbs">
              <span>
                <span>
                  <Link href="/" className="text-3xl">
                    Home
                  </Link>
                </span>
                <span className="text-3xl mx-3">»</span>
                <span className="breadcrumb_last text-3xl" aria-current="page">
                  FAQ
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Faq/>
    </div>
  )
}
