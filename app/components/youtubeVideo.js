export default function YoutubeVideo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems : 'center',
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      <h2 className="d-block text-6xl md:text-5xl" >
        What is Logity Dispatch?
      </h2>
      <iframe className="max-w-[720px]" width="100%" height="360" src="https://www.youtube.com/embed/l-BVM673pDs?si=KQUsaz07XCw4fLN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}
