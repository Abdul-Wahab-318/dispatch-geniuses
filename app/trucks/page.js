import Image from "next/image"
import PageHeader from "../components/PageHeader/pageHeader"
import "./style.css"
import Link from "next/link"

export default function Services() {
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
      <div className="section services">
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
                Dry van drivers often encounter long wait times at docks, inconsistent load availability, and challenges with securing profitable backhauls. These issues can impact earnings and lead to wasted time.
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
                Step deck drivers often face challenges with oversized or awkwardly shaped freight and specialized permits. We help you avoid the stress by ensuring your loads are ready to roll, legally and efficiently.
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
                  Your flatbed truck is a heavy-duty vehicle. As such, it
                  supports our economy in ways that other vehicles simply
                  cannot. <br />
                  Here at Logity Dispatch, we want to be your partner, providing
                  you with the dispatch services you need to connect you and
                  your flatbed with the clients who will benefit the most.
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
                Power-only drivers often face challenges with finding consistent trailer loads, managing trailer maintenance, and avoiding deadhead miles. This can result in reduced profitability and inefficiencies.
                </p>
                <Link href="/truck-type/power-only-dispatch/" className="link">
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
                Hot shot drivers are under constant pressure to meet tight deadlines and keep their equipment in top shape while dealing with fluctuating demand for urgent, small-load deliveries.
                </p>
                <Link href="/truck-type/hotshot/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row">
            <div className="col-12 col-md-6 services__col">
            <Image src={'/images/box-truck-3.png'} layout="fill" objectFit="cover" />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <h2 className="h3">Boxtruck</h2>
                <p>
                Box truck drivers often struggle with urban congestion, tight delivery schedules, and the unpredictability of short-haul demand. These factors make it hard to stay consistent and profitable.
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
