import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  const { title, slug , coverImage } = post.fields
 console.log(coverImage)
  return (
    // <div className='rounded-md overflow-hidden shadow-md'>
    //   <Link href={`/blog/${slug}`} aria-label={title}>
    //     <div className='mb-2'>
    //       <Image
    //         alt={`Cover Image for ${title}`}
    //         src={"https:"+coverImage.fields.file.url}
    //         width={coverImage.fields.file.details.image.width}
    //         height={coverImage.fields.file.details.image.height}
    //       />
    //     </div>
    //     <div className='p-4'>
    //       <h3 className='text-xl mb-1 leading-snug'>{title}</h3>

    //     </div>
    //   </Link>
    // </div>
    <div className="col-12 col-sm-6 col-md-4 mb-4">
        <div className="home-blog__card d-flex flex-column">
            <div className="home-blog__img-wrapper">
                <Image src={"https:"+coverImage.fields.file.url} layout='fill' style={{'objectFit':'cover'}} />
            <div className="home-blog__img-overlay">&nbsp;</div>
            </div>
            <div className="home-blog__card-top">
            <div className="home-blog__card-title h4">
                {title}
            </div>
            </div>
            <button
            aria-label="read-more-button"
            className="btn d-flex justify-content-between home-blog__btn"
            >
            <span>Read more</span>

            </button>
            <Link href={`/blog/${slug}`}>
            &nbsp;
            </Link>
        </div>
    </div>
  )
}

export default PostCard