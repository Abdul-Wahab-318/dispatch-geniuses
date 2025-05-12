import client from "../../contentfulClient"
import Link from "next/link"
import Image from "next/image"
import "../styles.css"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Popup from "../../components/Popup/popup"
import BlogCard from "../../components/BlogCard/blogCard"

export const dynamicParams = true
export const revalidate = 10800

export default async function Page({ params }) {
  const { slug } = params

  // Fetch the post data
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  })

  const popularBlogs = await client.getEntries({ content_type: "post" , limit:6 })

  const post = response?.items?.[0]
  console.log(post)
  if (!post) {
    // If no post found, you can handle this by showing a message or redirecting as per your requirement
    return <div>Post not found</div>
  }

  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <pre>
            <code>{text}</code>
          </pre>
        )
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.find((item) =>
            item.marks?.find((mark) => mark.type === "code")
          )
        ) {
          return (
            <div>
              <pre>
                <code>{children}</code>
              </pre>
            </div>
          )
        }

        return <p>{children}</p>
      },

      [INLINES.ENTRY_HYPERLINK]: (node) => {
        if (node.data.target.sys.contentType.sys.id === "post") {
          return (
            <Link href={`/posts/${node.data.target.fields.slug}`}>
              {node.data.target.fields.title}
            </Link>
          )
        }
      },

      [INLINES.HYPERLINK]: (node) => {
        const text = node.content.find(
          (item) => item.nodeType === "text"
        )?.value
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        )
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              height="400"
              width="100%"
              src={node.data.target.fields.embedUrl}
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          )
        }
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <Image
            src={node.data.target.fields.file.url}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.title}
          />
        )
      },
    },
  }

  const RichText = ({ content }) => {
    return <>{documentToReactComponents(content, options)}</>
  }

  return (
    <div className="main-wrapper blog-page-wrapper">
      <Popup />
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
                  <Link href="/blog" className="text-3xl">
                    Blog
                  </Link>
                </span>
                <span className="text-3xl mx-3">»</span>
                <span className="breadcrumb_last text-3xl" aria-current="page">
                  {post.fields.title}
                </span>
              </span>
            </div>
            <div className="blog-header">
              <h1 className="h2 mt-[50px] md:mt-12">{post.fields.title}</h1>
            </div>
            <div className="blog-body prose max-w-[700px] w-full mb-[50px]">
              <RichText content={post.fields.content} />
            </div>
            <section className="section-lg home-blog blog-footer max-w-[700px]">
              <div className="row">
                <div className="col-12 d-flex justify-content-between mb-16 items-center">
                  <div className="h2 wow animate__animated animate__fadeInLeft my-0">
                    Popular Blogs <Link href="/blog/" />
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
                {popularBlogs.items.map((post, ind) => (
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
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

// Use generateStaticParams to pre-render paths at build time
export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: "post" })

  return response.items.map((item) => ({
    slug: item.fields.slug,
  }))
}
