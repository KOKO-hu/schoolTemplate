import { Footer } from "../component/Footer";
import { Header } from "../component/layout/Header";
import { MoveTop } from "../component/layout/MoveTp";

export const About = () => {
  return (
    <>
      <Header />
      <section className="w3l-about-breadcrumb text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-5">
          <div className="container py-lg-5 py-md-4">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="title AboutPageBanner">About Us </h2>
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
                    About Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-aboutblock1" id="about">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
              <div className="col-lg-8 left-wthree-img pr-lg-5">
                <h5 className="title-subw3hny mb-1">About Us</h5>
                <h3 className="title-w3l">
                  Improving lives through Learning. We are always inspired by
                  the world and people around us.
                </h3>
              </div>
              <div className="col-lg-4 mt-lg-0 mt-5 about-right-faq align-self">
                <p className="">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Non quae, fugiat
                  consequatur voluptatem ad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-features py-5" id="work">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row main-cont-wthree-2 align-items-center">
            <div className="col-lg-6 feature-grid-left pr-lg-5">
              <h5 className="title-subw3hny">Why Choose Us</h5>
              <h3 className="title-w3l mb-4">
                Our Mission is to Provide a World‑className{" "}
                <span className="inn-text">Education</span>
              </h3>
              <p className="text-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est.
                Quisque ut lectus consequat, venenatis eros et, sed commodo
                risus. Nullam sit amet laoreet elit. Suspendisse non init magnaa
                velit efficitur.
              </p>
              <a
                href="about.html"
                className="btn btn-style btn-primary mt-lg-5 mt-4"
              >
                Read More
              </a>
            </div>
            <div className="col-lg-6 feature-grid-right mt-lg-0 mt-5 pl-lg-5">
              <div className="call-grids-w3 d-grid">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-microscope"></i>
                  </div>
                  <h4>
                    <a href="about.html" className="title-head">
                      Group Seminars
                    </a>
                  </h4>
                </div>
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                  <h4>
                    <a href="about.html" className="title-head">
                      Trending Courses
                    </a>
                  </h4>
                </div>
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-school"></i>
                  </div>
                  <h4>
                    <a href="about.html" className="title-head">
                      Large Library
                    </a>
                  </h4>
                </div>
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h4>
                    <a href="about.html" className="title-head">
                      Expert Teachers
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w3l-team-main team py-5" id="team">
        <div class="container py-lg-5">
          <h5 class="title-subw3hny mb-1 text-center">Our Team</h5>
          <h3 class="title-w3l text-center">
            Meet Our <span class="inn-text">Teachers</span>
          </h3>
          <div class="row team-row">
            <div class="col-lg-3 col-6 team-wrap mt-5">
              <div class="team-member text-center">
                <div class="team-img">
                  <img
                    src="assets/images/team1.jpg"
                    alt=""
                    class="radius-image"
                  />
                  <div class="overlay-team">
                    <div class="team-details text-center">
                      <div class="socials mt-20">
                        <a href="#url">
                          <span class="fab fa-facebook-f"></span>
                        </a>
                        <a href="#url">
                          <span class="fab fa-twitter"></span>
                        </a>
                        <a href="#url">
                          <span class="fab fa-linkedin-in"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#url" class="team-title">
                  Lawrence Petrie
                </a>
                <p>Director</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 team-wrap mt-5">
              <div class="team-member text-center">
                <div class="team-img">
                  <img
                    src="assets/images/team2.jpg"
                    alt=""
                    class="radius-image"
                  />
                  <div class="overlay-team">
                    <div class="team-details text-center">
                      <div class="socials mt-20">
                        <a href="#url">
                          <span class="fab fa-facebook-f"></span>
                        </a>
                        <a href="#url">
                          <span class="fab fa-twitter"></span>
                        </a>
                        <a href="#url">
                          <span class="fab fa-linkedin-in"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#url" class="team-title">
                  Jack Peters
                </a>
                <p>Managing Director</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 team-wrap mt-5">
              <div class="team-member text-center">
                <div class="team-img">
                  <img
                    src="assets/images/team3.jpg"
                    alt=""
                    class="radius-image"
                  />
                  <div class="overlay-team">
                    <div class="team-details text-center">
                      <div class="socials mt-20">
                        <a href="#url">
                          <span class="fab fa-facebook-f"></span>
                        </a>
                        <a href="#url">
                          <span class="fab fa-twitter"></span>
                        </a>
                        <a href="#url">
                          <span class="fab fa-linkedin-in"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#url" class="team-title">
                  Anna Phillips
                </a>
                <p>Teacher</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 team-wrap mt-5">
              <div class="team-member last text-center">
                <div class="team-img">
                  <img
                    src="assets/images/team4.jpg"
                    alt=""
                    class="radius-image"
                  />
                  <div class="overlay-team">
                    <div class="team-details text-center">
                      <div class="socials mt-20">
                        <a href="#url">
                          <span class="fab fa-facebook-f"></span>
                        </a>
                        <a href="#url">
                          <span class="fab fa-twitter"></span>
                        </a>
                        <a href="#url">
                          <span class="fab fa-linkedin-in"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#url" class="team-title">
                  Roland Walker
                </a>
                <p>Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w3l-servicesblock w3l-servicesblock1 py-5"
        id="progress"
      >
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self pr-lg-4">
              <div className="progress-info info1">
                <h6 className="progress-tittle">
                  Figma illustrations <span className="">80%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2">
                <h6 className="progress-tittle">
                  PHP programming <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info3">
                <h6 className="progress-tittle">
                  Web design & development <span className="">90%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info4">
                <h6 className="progress-tittle">
                  Adobe Photoshop <span className="">75%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-5">
              <h5 className="title-subw3hny mb-1">Progress Bars</h5>
              <h3 className="title-w3l">
                What you have in our Popular{" "}
                <span className="inn-text">Online Courses</span>
              </h3>
              <p class="mt-md-4 mt-3">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at. Lorem ipsum dolor sit amet elit.
                Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem
                ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa!
                elit ut et.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="w3l-join-main py-5">
        <div class="container py-md-5 py-2">
          <div class="w3l-project-in">
            <div class="row">
              <div class="col-lg-7">
                <div class="bottom-info">
                  <div class="header-section pr-lg-5">
                    <h5 class="title-subw3hny mb-3">Join With Us</h5>
                    <h3 class="title-w3l mb-3">
                      <span>Want to Join?</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Velit beatae rem ullam
                      dolore nisi esse quasi, sit amet. Lorem ipsum dolor sit
                      amet elit.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 align-self mt-lg-0 mt-sm-5 mt-4">
                <div class="d-sm-flex justify-content-end">
                  <a href="#" class="btn btn-primary btn-style mr-sm-2">
                    {" "}
                    Became a Teacher
                  </a>
                  <a href="#" class="btn btn-secondary btn-style">
                    {" "}
                    Contact Now{" "}
                  </a>
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
