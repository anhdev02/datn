import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleVideoEnd = (videoRef) => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };
  return (
    <main id="main" className="main">
      <h1 className="a11y">Locknlock</h1>
      <header className="hero-swiper swiper-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={false}
          pagination={false}
        >
          <SwiperSlide>
            <li
              className="hero swiper-slide is-invert reveal-bg swiper-slide-active"
              style={{
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="hero__bg">
                <div
                  className="bg"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="video-rwd">
                    <video
                      className="bg__video"
                      autoPlay
                      src="https://locknlock-d1171.web.app/assets/imgs/main-hero-1-sm.mp4"
                      onEnded={() => handleVideoEnd(videoRef1)}
                      ref={videoRef1}
                    />
                  </div>
                </div>
              </div>
              <div className="hero__cont reveal" style={{ opacity: 1 }}>
                <div className="l-content">
                  <h2 className="hero__h h2">Store your life</h2>
                  <span className="hero__sub h6">
                    A better life suggested by LocknLock
                  </span>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              className="hero swiper-slide is-invert reveal-bg swiper-slide-next"
              style={{
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="hero__bg">
                <div
                  className="bg"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="video-rwd">
                    <video
                      className="bg__video"
                      autoPlay
                      src="https://locknlock-d1171.web.app/assets/imgs/main-hero-0-sm.mp4"
                      onEnded={() => handleVideoEnd(videoRef2)}
                      ref={videoRef2}
                    />
                  </div>
                </div>
              </div>
              <div className="hero__cont reveal" style={{ opacity: 1 }}>
                <div className="l-content">
                  <h2 className="hero__h h2">Add good things</h2>
                  <span className="hero__sub h6">
                    A better life suggested by LocknLock
                  </span>
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </header>
      <section className="prd-d1 reveal-bg">
        <div
          className="prd-d1__bg bg"
          style={{ opacity: 1, transform: "translate(0px, 0px)" }}
        >
          <picture className="bg__img">
            <source
              srcSet="https://locknlock-d1171.web.app/assets/imgs/46783496ckon.jpg"
              media="(min-width: 720px)"
            />
            <img
              className="lazy entered loaded"
              alt=""
              src="https://locknlock-d1171.web.app/assets/imgs/46783496ckon.jpg"
            />
          </picture>
        </div>
        <div className="prd-d1__box">
          <div className="l-content">
            <div className="prd-d1__cont reveal" style={{ opacity: 1 }}>
              <h2 className="prd-d1__h h3">
                Add safety
                <br />
                LocknLock airtight containers
              </h2>
              <p className="prd-d1__desc">
                Lessen discomfort and add safety by understanding our lifestyle
                and getting inspiration from them.
              </p>
              <div className="prd-d1__func">
                <Link to="" className="prd-d1__btn btn">
                  <span className="btn__text">View More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="prd-d1 reveal-bg">
        <div
          className="prd-d1__bg bg"
          style={{ opacity: 1, transform: "translate(0px, 0px)" }}
        >
          <picture className="bg__img">
            <source
              srcSet="https://locknlock-d1171.web.app/assets/imgs/46783528pnmr.jpg"
              media="(min-width: 720px)"
            />
            <img
              className="lazy entered loaded"
              alt=""
              src="https://locknlock-d1171.web.app/assets/imgs/46783528pnmr.jpg"
            />
          </picture>
        </div>
        <div className="prd-d1__box">
          <div className="l-content">
            <div className="prd-d1__cont reveal" style={{ opacity: 1 }}>
              <h2 className="prd-d1__h h3">
                Add story
                <br />
                LocknLock tumbler
              </h2>
              <p className="prd-d1__desc">
                Create a design and a function with whatever that is in the
                tumbler to serve as the best match for every moment of my life.
              </p>
              <div className="prd-d1__func">
                <Link to="" className="prd-d1__btn btn">
                  <span className="btn__text">View More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="prd-d1 reveal-bg">
        <div
          className="prd-d1__bg bg"
          style={{ opacity: 1, transform: "translate(0px, 0px)" }}
        >
          <picture className="bg__img">
            <source
              srcSet="https://locknlock-d1171.web.app/assets/imgs/46783559wgcl.jpg"
              media="(min-width: 720px)"
            />
            <img
              className="lazy entered loaded"
              alt=""
              src="https://locknlock-d1171.web.app/assets/imgs/46783559wgcl.jpg"
            />
          </picture>
        </div>
        <div className="prd-d1__box">
          <div className="l-content">
            <div className="prd-d1__cont reveal" style={{ opacity: 1 }}>
              <h2 className="prd-d1__h h3">
                Add comfort
                <br />
                LocknLock cookware
              </h2>
              <p className="prd-d1__desc">
                Relish in the joy of cooking from cooking to serving on the
                table with comfortable use and feel-good design.
              </p>
              <div className="prd-d1__func">
                <Link to="" className="prd-d1__btn btn">
                  <span className="btn__text">View More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
