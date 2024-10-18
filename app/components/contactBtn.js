import Link from "next/link"

export default function ContactBtn() {
  return (
    <Link
    href="/contact-us"
    className="btn btn-lg btn-danger"
    >
        Contact Us
    </Link>
  )
}
