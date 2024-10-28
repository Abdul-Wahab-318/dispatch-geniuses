import Image from "next/image"
import PageHeader from "../components/PageHeader/pageHeader"
import "./style.css"
import Link from "next/link"

export default function Trucks() {
  return (
    <div className="main-wrapper">
      <PageHeader />
      <div className="container breadcrumbs-container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumbs">
              <span>
                <span>
                  <Link href="/truck-type//" className="text-3xl">
                    Home
                  </Link>
                </span>
                <span className="text-3xl mx-3">»</span>
                <span className="breadcrumb_last text-3xl" aria-current="page">
                  Trucks
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <h1 className="h2 not-home">Truck types</h1>
          </div>
          <div className="row services__row">
            <div className="col-12 col-md-6 services__col">
              <Image src={'/images/dry-van-2.png'} layout="fill" objectFit="cover" />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <h2 className="h3">Dry Van</h2>
                <p>
                Dry van drivers face long waiting times at docks, low volume of loads, and difficulty finding backhauls that pay well. All these problems tend to have an adverse effect on earnings and lead to idling. 
                </p>
                <Link href="/truck-type/dry-van/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row">
            <div className="col-12 col-md-6 services__col">
                <Image src={'/images/step-deck-1.avif'} layout="fill" objectFit="cover" />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <h2 className="h3">Step Deck</h2>
                <p>
                Drivers of step deck trailers normally have complications like dealing with oversized loads, specialized permits, and lack of consistent freight. These problems may cause extended downtimes, and complications in handling loads.
                </p>
                <Link href="/truck-type/step-deck/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row">
            <div className="col-12 col-md-6 services__col">
            <Image src={'/images/reefer-1.avif'} layout="fill" objectFit="cover" />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <h2 className="h3">Reefer</h2>
                <p>
                Reefer drivers face unique challenges with temperature-sensitive freight, strict delivery windows, and the high cost of maintaining refrigeration equipment. Delays or equipment failure can lead to significant losses.
                </p>
                <Link href="/truck-type/reefer/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row">
            <div className="col-12 col-md-6 services__col">
            <Image src={'/images/flatbed-1.avif'} layout="fill" objectFit="cover" />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <h2 className="h3">Flatbed</h2>
                <p>
                Flatbed operators undertake the strenuous task of strapping down bulky items, applying tarps, and getting permits for oversized freight. Even more challenging is finding well-paying and loads while balancing equipment requirements.
                </p>
                <Link href="/truck-type/flatbed/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row">
            <div className="col-12 col-md-6 services__col">
            <Image src={'/images/power-only-1.avif'} layout="fill" objectFit="cover" />
              
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <h2 className="h3">Power Only</h2>
                <p>
                Most of the power-only drivers experience difficulties in getting consistent trailer loads, maintaining and managing the trailers, and avoiding deadhead miles as well. This leads to reduced profitability and increased inefficiencies which could otherwise be avoided.
                </p>
                <Link href="/truck-type/power-only/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row">
            <div className="col-12 col-md-6 services__col">
            <Image src={'/images/hot-shot-1.avif'} layout="fill" objectFit="cover" />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <h2 className="h3">Hotshot</h2>
                <p>
                Always in a rush, hot shot drivers are under a lot of pressure as they work around the clock to deliver small, urgent orders while maintaining their trucks in decent shape and understanding fluctuating demand.
                </p>
                <Link href="/truck-type/hotshot/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row">
            <div className="col-12 col-md-6 services__col">
            <Image src={'/images/box-truck-2.avif'} layout="fill" objectFit="cover" />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <h2 className="h3">Boxtruck</h2>
                <p>
                Driving a box truck is a tricky business. Box truck drivers often have to struggle with the tight time schedule for the deliveries, unpredictable backhauls and low rate per mile. These forces create a very difficult situation in terms of consistency and profitability.
                </p>
                <Link href="/truck-type/boxtruck/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
