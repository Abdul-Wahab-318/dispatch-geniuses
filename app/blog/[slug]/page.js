import client from "../../contentfulClient"
import Link from "next/link";
import '../styles.css'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Popup from "../../components/Popup/popup"

export default async function Page({params}) {

  const { slug } = params;

  // Fetch the post data
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  const post = response?.items?.[0];
  console.log(post)
  if (!post) {
    // If no post found, you can handle this by showing a message or redirecting as per your requirement
    return <div>Post not found</div>;
  }

  const options = {
    renderMark: {
      [MARKS.CODE]: text => {
        return (
          <pre>
            <code>{text}</code>
          </pre>
        )
      }
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.find(item =>
            item.marks?.find(mark => mark.type === 'code')
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
  
      [INLINES.ENTRY_HYPERLINK]: node => {
        if (node.data.target.sys.contentType.sys.id === 'post') {
          return (
            <Link href={`/posts/${node.data.target.fields.slug}`}>
              {node.data.target.fields.title}
            </Link>
          )
        }
      },
  
      [INLINES.HYPERLINK]: node => {
        const text = node.content.find(item => item.nodeType === 'text')?.value
        return (
          <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
            {text}
          </a>
        )
      },
  
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
          return (
            <iframe
              height='400'
              width='100%'
              src={node.data.target.fields.embedUrl}
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          )
        }
      },
  
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <ContentfulImage
            src={node.data.target.fields.file.url}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.title}
            className='h-20 w-20'
          />
        )
      }
    }
  }

  const RichText = ({ content }) => {
    return <>{documentToReactComponents(content, options)}</>
  }
  

  return (
    <div className="main-wrapper blog-page-wrapper">
      <Popup/>
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
          </div>
        </div>
      </div>
    </div>
  )
}


// Use generateStaticParams to pre-render paths at build time
export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: "post" });

  return response.items.map((item) => ({
    slug: item.fields.slug,
  }));
}