import React from "react";
export const Footer = () => {
  return (
    <footer className="w3l-footer-22 position-relative">
      <div className="footer-sub py-5">
        <div className="container py-md-5">
          <div className="row sub-columns">
            <div className="col-lg-4 col-md-6 sub-one-left ab-right-cont pr-lg-5 mb-md-0  mb-4">
              <h6>About </h6>
              <p>
                Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore
                nisi esse quasi, sit amet. Lorem ipsum dolor sit amet
                elit.voluptatem accusantium doloremque.
              </p>
              <div className="columns-2">
                <ul className="social">
                  <li>
                    <a href="#facebook">
                      <span
                        className="fab fa-facebook-f"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <span
                        className="fab fa-linkedin-in"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <span
                        className="fab fa-twitter"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a href="#google">
                      <span
                        className="fab fa-google-plus-g"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a href="#pinterest">
                      <span
                        className="fab fa-pinterest-p"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 sub-two-right pl-lg-5">
              <h6>Useful Links</h6>
              <ul>
                <li>
                  <a href="index.html">
                    <span className="fas fa-chevron-right mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="about.html">
                    <span className="fas fa-chevron-right mr-2"></span>About
                  </a>
                </li>
                <li>
                  <a href="courses.html">
                    <span className="fas fa-chevron-right mr-2"></span>Courses
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <span className="fas fa-chevron-right mr-2"></span>Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 sub-two-right pl-lg-5 mt-md-0 mt-4">
              <h6>Help & Support</h6>
              <ul>
                <li>
                  <a href="#live">
                    <span className="fas fa-chevron-right mr-2"></span>Live
                    Chart
                  </a>
                </li>
                <li>
                  <a href="#faq">
                    <span className="fas fa-chevron-right mr-2"></span>Faq
                  </a>
                </li>
                <li>
                  <a href="#support">
                    <span className="fas fa-chevron-right mr-2"></span>Support
                  </a>
                </li>
                <li>
                  <a href="#terms">
                    <span className="fas fa-chevron-right mr-2"></span>Terms of
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 sub-two-right mt-md-0 mt-4">
              <h6>Research</h6>
              <ul>
                <li>
                  <a href="#">
                    <span className="fas fa-chevron-right mr-2"></span> Academic
                    Divisions
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fas fa-chevron-right mr-2"></span> Student
                    Research
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fas fa-chevron-right mr-2"></span> Centers
                    & Institutes
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fas fa-chevron-right mr-2"></span> Research
                    Facilities
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {/*  </div> */}

      <div className="copyright-footer text-center">
        <div className="container">
          <div className="columns">
            <p>
              © 2021 Edukator. All rights reserved.Design by
              <a href="https://w3layouts.com/" target="_blank">
                W3layouts
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
