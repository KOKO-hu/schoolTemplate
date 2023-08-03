import React from "react";
import { useEffect } from "react";
import { Header } from "../component/layout/Header";
import { Footer } from "../component/Footer";
import { MoveTop } from "../component/layout/MoveTp";
export const Home = () => {
  return (
    <div>
      <Header />
      <section className="bannerw3l-hnyv">
        <div className="banner-layer">
          <video autoplay muted loop id="myVideo">
            <source src="assets/images/line-edu.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="main-content-top">
            <div className="container">
              <div className="main-content">
                <h4>Distance education with fun learning</h4>
                <h3>
                  Discover best classNamees for the best
                  <span className="inn-text">learning</span>
                </h3>
                <a
                  href="about.html"
                  className="btn btn-style transparant-btn mt-md-5 mt-4"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w3apply-admission">
          <div className="apply-admission-wrap">
            <div className="apply-admission-inner">
              <h4 className="title text-center">
                <span>Apply for admission</span>
              </h4>
              <div className="caption text-center mb-2">
                Make it more simple!
              </div>
              <div className="apply-form">
                <form action="#" className="" method="post">
                  <input
                    type="text"
                    name="text"
                    placeholder="Your Name"
                    required=""
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                  <button className="btn btn-style btn-primary">
                    Apply Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-bottom-grids-6 py-5" id="grids">
        <div className="container py-md-5 py-2">
          <div className="grids-area-hny row text-left pt-lg-5 mt-lg-5">
            <div className="col-lg-4 col-md-6 grids-feature pr-lg-5">
              <div className="area-box">
                <span className="fas fa-users"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    The Best and Most Involved Teachers
                  </a>
                </h4>
                <p>
                  Vivamus a ligula quam tesque et libero ut justo, ultrices in.
                  Ut eu leo non. Duis sed dolor et amet labore et dolore elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
              <div className="area-box">
                <span className="fas fa-laptop-code"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    The Large selection of courses and Instruction
                  </a>
                </h4>
                <p>
                  Vivamus a ligula quam tesque et libero ut justo, ultrices in.
                  Ut eu leo non. Duis sed dolor et amet labore et dolore elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5 pl-lg-5">
              <div className="area-box">
                <span className="fas fa-book-open"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    High-Quality Classes & Course Categories
                  </a>
                </h4>
                <p>
                  Vivamus a ligula quam tesque et libero ut justo, ultrices in.
                  Ut eu leo non. Duis sed dolor et amet labore et dolore elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-homeblock1" id="about">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="row cwp23-grids align-items-center">
              <div className="col-lg-6">
                <h5 className="title-subw3hny">About Us</h5>
                <h3 className="title-w3l">
                  Find courses on almost any{" "}
                  <span className="inn-text">Topic</span>
                </h3>
                <h6 className="mt-md-4 mt-md-5 mt-4">
                  Build your library for your career
                  <br />
                  and personal growth
                </h6>
                <a
                  href="about.html"
                  className="btn btn-style btn-primary mt-lg-5 mt-4"
                >
                  View Courses
                </a>
              </div>
              <div className="HomeAboutImages col-lg-6 mt-lg-0 mt-5 pl-lg-5">
                <div className="cwp23-text-cols row">
                  <div className="column col-6">
                    <div className="column-w3-img position-relative">
                      <a href="#">
                        <img
                          src="assets/images/1.jpg"
                          alt=""
                          className="radius-image img-fluid"
                        />
                      </a>
                      <div className="edu-info">
                        <h4 className="edu-heading-title">
                          <a href="#">Personal Development</a>
                        </h4>
                      </div>
                    </div>
                    <div className="column-w3-img position-relative mt-4">
                      <a href="#">
                        <img
                          src="assets/images/b8.jpg"
                          alt=""
                          className="radius-image img-fluid"
                        />
                      </a>
                      <div className="edu-info">
                        <h4 className="edu-heading-title">
                          <a href="#">Business</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="column col-6">
                    <div className="column-w3-img position-relative">
                      <a href="#">
                        <img
                          src="assets/images/b3.jpg"
                          alt=""
                          className="radius-image img-fluid"
                        />
                      </a>
                      <div className="edu-info">
                        <h4 className="edu-heading-title">
                          <a href="#">Entrepreneurship</a>
                        </h4>
                      </div>
                    </div>
                    <div className="column-w3-img position-relative mt-4">
                      <a href="#">
                        <img
                          src="assets/images/2.jpg"
                          alt=""
                          className="radius-image img-fluid"
                        />
                      </a>
                      <div className="edu-info">
                        <h4 className="edu-heading-title">
                          <a href="#">Photography</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-stats-main" id="stats">
        <div className="container">
          <div className="row stats-con py-lg-0 py-5">
            <div className="col-lg-6 stats-content-right mb-lg-0 mb-lg-5 mb-2">
              <a href="#service" className="d-block zoom">
                <img src="assets/images/ab1.jpg" alt="" className="img-fluid" />
              </a>
            </div>
            <div className="col-lg-6 stats-content-left pl-lg-5">
              <div className="stats_info counter_grid1 text-left mt-lg-5 mt-4">
                <div className="icon stat-icon">
                  <p className="counter">5233</p>
                </div>
                <div className="stat-icon-des">
                  <h4>The Best and Most Involved Teachers</h4>
                  <p className="para-stat">
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula.
                  </p>
                </div>
              </div>
              <div className="stats_info counter_grid text-left mt-lg-5 mt-4">
                <div className="icon stat-icon">
                  <p className="counter">1233</p>
                </div>
                <div className="stat-icon-des">
                  <h4>The Large selection of courses and Instruction</h4>
                  <p className="para-stat">
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula.
                  </p>
                </div>
              </div>
              <div className="stats_info counter_grid text-left mt-lg-5 mt-4">
                <div className="icon stat-icon">
                  <p className="counter">3000</p>
                </div>
                <div className="stat-icon-des">
                  <h4>High-Quality Course Categories</h4>
                  <p className="para-stat">
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-courses" id="courses">
        <div className="blog py-5">
          <div className="container py-md-5 py-2">
            <h5 className="title-subw3hny text-center">Featured Courses</h5>
            <h3 className="title-w3l text-center">
              Popular <span className="inn-text">Courses</span>
            </h3>

            <div className="row">
              <div className="col-lg-3 col-md-6 item mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/b1.jpg"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="post-pos">
                      <a href="#popular" className="receipe blue">
                        Beginner
                      </a>
                      <a href="#popular" className="receipe yellow ml-2">
                        New
                      </a>
                    </div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$53.00</p>
                      <ul className="rating-star">
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" className="course-desc">
                      The Essential Guide to Entrepreneurship
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fas fa-users"></span>
                        <span className="meta-value">
                          {" "}
                          68 Students enrolled
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 item mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/b2.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$70.00</p>
                      <ul className="rating-star">
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Sounds True’s Freedom to Choose Different
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fas fa-users"></span>
                        <span className="meta-value">
                          {" "}
                          44 Students enrolled
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 item mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/b3.jpg"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="post-pos">
                      <a href="#reciepe" className="receipe blue">
                        Beginner
                      </a>
                      <a href="#popular" className="receipe yellow ml-2">
                        Free
                      </a>
                    </div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$69.00</p>
                      <ul className="rating-star">
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Learn Master JQuery in a Short Period of Time
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fas fa-users"></span>
                        <span className="meta-value">
                          {" "}
                          74 Students enrolled
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/b4.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$90.00</p>
                      <ul className="rating-star">
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star"></span>
                        </li>
                        <li>
                          <span className="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Business Analysis: Working with Use Cases
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fas fa-users"></span>
                        <span className="meta-value">
                          {" "}
                          64 Students enrolled
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 mx-auto text-more text-center pt-lg-4">
                <a href="courses.html" className="btn btn-style btn-primary">
                  View All Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-testimonials" id="testimonials">
        <div className="cusrtomer-layout py-5">
          <div className="container py-lg-4 py-md-3 py-2 pb-lg-0">
            <h5 className="title-subw3hny text-center mb-1">Reviews</h5>
            <h3 className="title-w3l two text-center mb-sm-5 mb-4">
              Happy Clients & <span className="inn-text">Feedbacks</span>
            </h3>

            <div className="testimonial-width">
              <div className="owl-two row">
                <div className="col-lg-4 col-md-6 item mt-md-5 mt-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <i className="fas fa-quote-right"></i>
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="peopl align-self">
                          <h3>John wilson</h3>
                          <p className="indentity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 item mt-md-5 mt-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <i className="fas fa-quote-right"></i>
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="peopl align-self">
                          <h3>Julia sakura</h3>
                          <p className="indentity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 item mt-md-5 mt-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <i className="fas fa-quote-right"></i>
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="peopl align-self">
                          <h3>Roy Linderson</h3>
                          <p className="indentity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-project" id="subscribe">
        <div className="container-fluid mx-lg-0">
          <div className="row">
            <div className="col-lg-6 bottom-info">
              <div className="project-header-section text-left">
                <h5 className="title-subw3hny text-left mb-1">Join With Us</h5>
                <h3 className="title-w3l">
                  Join us for Free to get instant email
                  <span className="inn-text"> updates!</span>
                </h3>
                <p className="mt-3 pr-lg-5">
                  Subscribe and get notified at first on the latest update and
                  offers!
                </p>

                <form action="#" className="subscribe mt-5" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                  <button className="btn btn-style btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 subcribe-img"></div>
          </div>
        </div>
      </section>
      {/* dee */}
      <Footer />
      <MoveTop />
    </div>
  );
};
