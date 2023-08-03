import { Footer } from "../component/Footer";
import { Header } from "../component/layout/Header";
import { MoveTop } from "../component/layout/MoveTp";

export const Contact = () => {
  return (
    <>
      <Header />
      <section className="w3l-about-breadcrumb text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-5">
          <div className="container py-lg-5 py-md-4">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="title AboutPageBanner">Contact Us </h2>
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
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w3l-contact-10 py-5" id="contact">
        <div className="form-41-mian pt-lg-4 pt-md-3 pb-lg-4">
          <div className="container">
            <div className="heading text-center mx-auto">
              <h5 className="title-subw3hny text-center">Contact our team</h5>
              <h3 className="title-w3l">
                Got any <span className="inn-text">Questions? </span>
              </h3>
            </div>
            <div className="contacts-5-grid-main mt-5">
              <div className="contacts-5-grid">
                <div className="map-content-5">
                  <div className="d-grid grid-col-2">
                    <div className="contact-type">
                      <div className="address-grid">
                        <h6>
                          <span className="fas fa-map-marked-alt"></span>{" "}
                          Address
                        </h6>
                        <p>
                          #302, 5th Floor, VHLY-2247 ek, Settlers Lane, New
                          York.
                        </p>
                      </div>
                      <div className="address-grid">
                        <h6>
                          <span className="fas fa-envelope-open-text"></span>{" "}
                          Email
                        </h6>
                        <a href="mailto:mailone@example.com" className="link1">
                          mailone@example.com
                        </a>
                        <a href="mailto:mailtwo@example.com" className="link1">
                          mailtwo@example.com
                        </a>
                      </div>
                      <div className="address-grid">
                        <h6>
                          <span className="fas fa-phone-alt"></span> Phone
                        </h6>
                        <a href="tel:+12 324-016-695" className="link1">
                          +12 324-016-695
                        </a>
                        <a href="tel:+44 224-058-545" className="link1">
                          +44 224-058-545
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-inner-cont mt-5">
              <form action="#" method="post" className="signin-form">
                <div className="form-grids">
                  <div className="form-input">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Enter your name *"
                      required=""
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      name="Subject"
                      placeholder="Enter subject "
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="email"
                      name="Sender"
                      placeholder="Enter your email *"
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      name="Phone"
                      placeholder="Enter your Phone Number *"
                      required
                    />
                  </div>
                </div>
                <div className="form-input">
                  <textarea
                    name="Message"
                    placeholder="Type your query here"
                    required=""
                  ></textarea>
                </div>
                <div className="text-right">
                  <button className="btn btn-style btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts-sub-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
      <MoveTop />
    </>
  );
};
