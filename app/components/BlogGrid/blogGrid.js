import Link from "next/link"
import client from "@/app/contentfulClient"
import BlogCard from "../BlogCard/blogCard"


export default async function BlogGrid() {
  const data = await client.getEntries({ content_type: "post" })
  //const data = {items : []}
  return (
    <section className="section-lg home-blog">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between mb-16 items-center">
            <div className="h2 wow animate__animated animate__fadeInLeft my-0">
              Blog <Link href="/blog/" />
            </div>
            <Link
              href="/blog"
              className="link link-middle wow animate__animated animate__fadeInRight my-0"
            >
              All news {"  "} +
            </Link>
          </div>
        </div>
        <div className="row g-4 wow animate__animated animate__fadeIn">
          {data.items.map((post, ind) => (
            <BlogCard key={post.fields.slug} post={post} />
          ))}
        </div>
        <div
          className="row d-lg-none"
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <Link
            href="/blog/"
            className="link link-middle wow animate__animated animate__fadeInRight"
          >
            All news
          </Link>
        </div>
      </div>
    </section>
  )
}
