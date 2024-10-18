import Link from "next/link"

export default function EmailBtn() {
  return (
    <Link
      href="/contact-us"
      className="btn btn-lg btn-light border-2 border-blue"
    >
        email@gmail.com
    </Link>
  )
}
