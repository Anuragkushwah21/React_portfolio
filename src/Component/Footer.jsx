import React from "react";

function Footer() {
  return (
    <>
      {/* <!-- Scroll to top --> */}
      <i className="scroll-up" id="scroll-up">
        <img
          src="./image and icon/up-arrow.png"
          className="socicon up-arrow"
          alt="scroll-up"
        />
      </i>
      <footer className="footer bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                Hello! I'm Anurag kushwah, a passionate web developer on an
                exciting digital journey. Armed with expertise in HTML, CSS, and
                JavaScript, I specialize in crafting visually appealing and
                user-friendly websites. From turning ideas into code to creating
                seamless online experiences, I'm here to make your digital
                dreams a reality. Join me as I navigate the ever-evolving world
                of web development and turn concepts into captivating online
                realities.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: anuragkofficial21@gmail.com</p>
              <p>Phone: +91 9669907552</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="text-center">
              <p>
                &copy; 2024 Your Website. All Rights Reserved.{" "}
                <a href="https://fronts.ai/u/anuragkushwahakfreelancerpvtltdgwaliormp">
                  Anuragkushwah
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
