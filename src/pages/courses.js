import { Footer } from "../component/Footer";
import { Header } from "../component/layout/Header";
import { MoveTop } from "../component/layout/MoveTp";

export const Course = () => {
  return (
    <>
      <Header />
      <section className="w3l-about-breadcrumb text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-5">
          <div className="container py-lg-5 py-md-4">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="title AboutPageBanner">Courses </h2>
                <p className="inner-page-para mt-2">
                  Learn Anytime, Anywhere. Accelerate Your Future.
                </p>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2"></span>{" "}
                    Courses
                  </li>
                </ul>
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
                <h5 className="title-subw3hny">Find Courses</h5>
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
                  <div className="column col-6 mt-lg-4 pt-lg-1">
                    <div className="column-w3-img position-relative">
                      <a href="#">
                        <img
                          src="assets/images/ab3.jpg"
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
                  </div>
                  <div className="column col-6">
                    <div className="column-w3-img position-relative">
                      <a href="#">
                        <img
                          src="assets/images/banner1.jpg"
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
                          src="assets/images/banner2.jpg"
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
      <section class="w3l-courses" id="courses">
        <div class="blog py-5">
          <div class="container py-md-5 py-2">
            <h5 class="title-subw3hny text-center">Featured Courses</h5>
            <h3 class="title-w3l text-center">
              Popular <span class="inn-text">Courses</span>
            </h3>

            <div class="row">
              <div class="col-lg-3 col-md-6 item mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/b1.jpg"
                        alt="Card image cap"
                      />
                    </a>
                    <div class="post-pos">
                      <a href="#popular" class="receipe blue">
                        Beginner
                      </a>
                      <a href="#popular" class="receipe yellow ml-2">
                        New
                      </a>
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$73.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      The Essential Guide to Entrepreneurship
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fas fa-users"></span>
                        <span class="meta-value"> 68 Students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 item mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/b2.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$80.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Sounds True’s Freedom to Choose Different
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fas fa-users"></span>
                        <span class="meta-value"> 44 Students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 item mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/b3.jpg"
                        alt="Card image cap"
                      />
                    </a>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe blue">
                        Beginner
                      </a>
                      <a href="#popular" class="receipe yellow ml-2">
                        Free
                      </a>
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$99.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Learn Master JQuery in a Short Period of Time
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fas fa-users"></span>
                        <span class="meta-value"> 74 Students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 item mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/b4.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$88.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Business Analysis: Working with Use Cases
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fas fa-users"></span>
                        <span class="meta-value"> 64 Students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 item mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/b5.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$70.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Sounds True’s Freedom to Choose Different
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fas fa-users"></span>
                        <span class="meta-value"> 44 Students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 item mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/b6.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$60.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Sounds True’s Freedom to Choose Different
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fas fa-users"></span>
                        <span class="meta-value"> 44 Students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 item mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/b7.jpg"
                        alt="Card image cap"
                      />
                    </a>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe blue">
                        Beginner
                      </a>
                      <a href="#popular" class="receipe yellow ml-2">
                        Free
                      </a>
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$69.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Learn Master JQuery in a Short Period of Time
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fas fa-users"></span>
                        <span class="meta-value"> 74 Students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 item mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/b8.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$90.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star"></span>
                        </li>
                        <li>
                          <span class="fas fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Business Analysis: Working with Use Cases
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fas fa-users"></span>
                        <span class="meta-value"> 64 Students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MoveTop />
    </>
  );
};
