import Link from "next/link"
import Image from "next/image"

export default async function Page({img_url = "/images/stats-bg.webp" , children}) {
  return (
    <div className="main-wrapper shipper-broker-page">
      <header className="header header-blog">
        <Image
          unoptimized
          priority
          src={img_url}
          layout="fill"
          style={{ objectFit: "cover" }}
        />
        <div className="container header__inner">
          <div className="row">
            <div className="flex-row">
                <div className="header-banner flex gap-16 items-center justify-center">
                    <h2 className="mb-0 text-white sm:text-7xl lg:text-7xl">Get More Right Loads</h2>
                    <Link href={'/how-to-start'} className="text-[20px] md:text-[26px] px-[20px] py-[5px] lg:py-[10px] lg:px-[40px]">Apply</Link>
                </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container blog-wrapper">
        {children}
      </div>
    </div>
  )
}
