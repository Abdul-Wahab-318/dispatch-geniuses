"use client"
import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./styles.css"

export default function Testimonials() {
  let testimonialSettings = {
    autoplay: true,
    arrows: false,
    responsive: true,
    swipe: false,
    slidesToShow: 2,
    dots: true,
    settings: {
      pauseOnHover: true,
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const testimonials = [
    {
      name: "Ryan Knight",
      review:
        "Switching to Dispatch Geniuses was the best decision I made for my business. My previous dispatcher wasn’t maximizing my revenue, but with Dispatch Geniuses, I had my best month earning $34,000 on a box truck and hit $10,300 in just one week. These guys know how to get the job done!",
    },
    {
      name: "Marc Anderson",
      review:
        "Since day one I’ve been with Dispatch Geniuses and I can firmly say I didn’t even have to look back. I do not exceed a radius of 300 miles for my trips, earn good profits and don’t even think about changing my dispatchers. They handle anything and everything so that I can do what I love most – drive.",
    },
    {
      name: "Omar Hassan",
      review:
        "Ryan pointed me to Dispatch Geniuses, and I can't imagine being happier. My last dispatch charged me around 10%, with these guys there are better prices and services. Everything has been perfect since then.",
    },
    {
      name: "Mohammed Ibrahim",
      review:
        "Once I got my CDL, I moved on to Dispatch Geniuses, and it has been a great match. From the first day, they’ve simplified my life managing everything for me, I have never been more satisfied with a dispatch company.",
    },
    {
      name: "James Carter",
      review:
        "Dispatch Geniuses has been a game-changer for me. These guys really are geniuses when it comes to squeezing me out of tight situations and tough markets. No matter how rough things get, they always find a way to keep me moving and making money.",
    },
  ]

  return (
    <section
      className="testimonials section-lg position-relative"
      style={{ paddingBottom: "150px" , backgroundColor : '#f3f7fd' }}
    >
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <h2 className="home-trucks__title wow animate__animated animate__fadeInLeft">
              Testimonials
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testimonial-desc-slider pt-5">
              <Slider {...testimonialSettings}>
                {testimonials.map((obj, ind) => {
                  return (
                    <div className="desc-slider-item">
                      <h5
                        className="text-gray mb-4 text-4xl font-normal"
                        style={{ lineHeight: "1.6" }}
                      >
                        {obj.review}
                      </h5>
                      <h5 className="text-purple fw-bold text-4xl mb-2">- {obj.name}</h5>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
