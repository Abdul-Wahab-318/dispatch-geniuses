import BlogGrid from "../components/BlogGrid/blogGrid"
import Link from "next/link"
import './styles.css'

export const revalidate = 120 // 2 mins

export default async function Page() {

  return (
    <div className="main-wrapper shipper-broker-page">
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
                  Blog
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container blog-wrapper">
        <BlogGrid/>
      </div>
    </div>
  )
}
