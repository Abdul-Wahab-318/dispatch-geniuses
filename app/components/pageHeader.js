import Image from "next/image"
import Link from "next/link"
export default function PageHeader({img_url = "/images/about-header.png"}) {
  return (
    <header className="header">
      <Image
        unoptimized
        priority
        src={img_url}
        layout="fill"
        style={{ objectFit: "cover" }}
      />
      <div className="container-fluid header__inner">
        <div className="row">
          <div className="flex-row">
            <div className="header__banner">
              <div className="hidden">
                <Link
                  className="header__banner-link"
                  href="../how-to-start/index.html"
                >
                  from 5% of gross
                </Link>
              </div>
              <div className="full-width">
                <Link
                  className="header__banner-link"
                  href="../how-to-start/index.html"
                >
                  from 5% of gross
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
