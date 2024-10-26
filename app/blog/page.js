import BlogGrid from "../components/BlogGrid/blogGrid"
import PageHeader from "../components/PageHeader/pageHeader"
import Link from "next/link"
import './styles.css'
import client from "../contentfulClient"

export default async function Page() {

    //const data = await client.getEntries({'content_type':'post'})
    
  return (
    <div className="main-wrapper shipper-broker-page">
      <PageHeader />
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
