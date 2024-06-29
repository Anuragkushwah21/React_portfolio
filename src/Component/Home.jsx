import React from "react";

function Home() {
  return (
    <>
      <section className="hero" id="about">
        <img
          src="./image and icon/anurag.jpg"
          alt="jane-doe"
          loading="lazy"
          className="hero-img"
        />
        <div className="bio animate__animated animate__shakeX">
          <h2 className="bio-title">About Me</h2>
          <h4>Anurag Kushwah - Web Developer</h4>
          <p className="bio-text">
            Meet Anurag Kushwah, your go-to web developer for transforming ideas
            into digital brilliance. With expertise in HTML, CSS, and
            JavaScript, Anurag crafts visually stunning and functionally
            seamless websites. A problem solver and creative force, he ensures
            your digital presence is not just a site but a unique experience.
            Join Anurag in building your digital future today.
          </p>
        </div>
      </section>
      {/* <!-- More about --> */}
  <section class="more-about">
    <h2>More About Me</h2>
    <h4>Anurag Kushwah - Web Developer Extraordinaire</h4>
    <p>
      Welcome to the digital realm crafted by Anurag Kushwah, where innovation meets precision in the world of web
      development. Anurrag is not just a name; it's a brand synonymous with cutting-edge coding, visionary design, and
      unparalleled user experiences.
    </p>
    <p>
      Anurag is a passionate web developer who breathes life into pixels and turns lines of code into captivating
      online experiences. With a keen eye for detail and a relentless pursuit of perfection, Anurag has mastered the art
      of transforming ideas into dynamic, functional, and visually stunning websites.
    </p>
    <p>
      Having embarked on the journey of web development years ago, Anurag has honed a diverse skill set that encompasses
      front-end and back-end technologies. Proficient in HTML, CSS, JavaScript, and a myriad of frameworks, Anurag
      navigates the ever-evolving tech landscape with ease, ensuring that each project is not just a website but a
      digital masterpiece.
    </p>
    <p>What sets Anurag apart is not just technical expertise but also a deep understanding of user behavior and
      business objectives. This unique blend of skills allows him to create websites that not only look fantastic but
      also drive results, whether it's boosting online presence, enhancing user engagement, or optimizing for
      conversions.
    </p>
    <p>
      Anurag Kushwah is not just a developer; he is a problem solver and a creative force. Collaborating with clients to
      understand their visions, he turns concepts into reality, ensuring that every project reflects the unique identity
      of the brand it represents. His commitment to delivering excellence is unwavering, and client satisfaction is not
      just a goal but a guarantee.
    </p>
    <p>Join Anurag on this exciting journey of digital transformation, where every line of code tells a story, and
      every website is a testament to his commitment to innovation, functionality, and aesthetics. When you choose
      Anurag Kushwah as your web developer, you're not just getting code; you're getting a partner in crafting a
      digital future.</p>
    <p>Let's build something extraordinary together.</p>
    <p>Note: This is a fictional description created for illustrative purposes, and any resemblance to real persons,
      living or dead, is purely coincidental.</p>
  </section>

  {/* <!-- Skills section --> */}
  <section class="skills" id="skills">
    <h2 class="skill-header">My Top Skills</h2>

    <div class="skills-wrapper">
      <div class="first-set animate__animated animate__pulse">
        <img src="./image and icon/html-5.png" alt="" loading="lazy" class="icon icon-card" />
        <img src="./image and icon/css-3.png" alt="" loading="lazy" class="icon icon-card" />
        <img src="./image and icon/js.png" alt="" loading="lazy" class="icon icon-card" />
      </div>

      <div class="second-set animate__animated animate__pulse">
        <img src="./image and icon/bootstrap.png" alt="" loading="lazy" class="icon icon-card" />
        <img src="./image and icon/physics.png" alt="" loading="lazy" class="icon icon-card" />
        <img src="./image and icon/git.png" alt="" loading="lazy" class="icon icon-card" />
      </div>
      <div class="second-set animate__animated animate__pulse">
        <img src="./image and icon/icons8-ejs-48.png" alt="" loading="lazy" class="icon icon-card" />
        <img src="./image and icon/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png" alt=""
          loading="lazy" class="icon icon-card" />
        <img src="./image and icon/icons8-node-js-48.png" alt="" loading="lazy" class="icon icon-card" />
      </div>
    </div>
  </section>

  {/* <!-- Projects section --> */}
  <section class="projects" id="projects">
    <h2 class="projects-title">Some of my Recent Projects</h2>
    <div class="projects-container">
      <div class="project-container project-card">
        <img src="assets/images/expenseTracker.png" alt="expense-tracker" loading="lazy" class="project-pic" />
        <h3 class="project-title">Expense Tracker</h3>
        <p class="project-details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          ratione vel inventore labore commodi modi quos culpa aut saepe!
          Alias!
        </p>
        <a href="#" target="_blank" class="project-link">Check it Out</a>
      </div>
      <div class="project-container project-card">
        <img src="assets/images/netflixClone.png" alt="netflic-clone" loading="lazy" class="project-pic" />
        <h3 class="project-title">Netflix Clone</h3>
        <p class="project-details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          ratione vel inventore labore commodi modi quos culpa aut saepe!
          Alias!
        </p>
        <a href="#" target="_blank" class="project-link">Check it Out</a>
      </div>
      <div class="project-container project-card">
        <img src="assets/images/greenyEarth.png" alt="greeny-earth" loading="lazy" class="project-pic" />
        <h3 class="project-title">Greeny Earth</h3>
        <p class="project-details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          ratione vel inventore labore commodi modi quos culpa aut saepe!
          Alias!
        </p>
        <a href="#" target="_blank" class="project-link">Check it Out</a>
      </div>
    </div>
  </section>

  {/* <!-- Contact section --> */}
  <section class="contact" id="contact">
    <h2>Get In Touch With Me</h2>
    <div class="contact-form-container">
      <div class="contact-form">
        <form action="https://formspree.io/f/xyylngw" method="POST">
          <div class="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" name="sender-name" placeholder="Enter Your Name" class="input-field"
              required />
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" name="sender-email" placeholder="Enter Your Email" class="input-field"
              required />
          </div>
          <div class="form-control">
            <label for="message">Message</label>
            <textarea id="message" cols="60" rows="10" placeholder="Enter Your Message" name="message"
              class="input-field" required></textarea>
          </div>
          <input type="submit" value="Submit" id="submit-btn" class="submit-btn" />
        </form>
      </div>
    </div>
  </section>

  {/* <!-- Social accounts - Fixed to the right --> */}
  <div class="socials">
    <a href="https://www.facebook.com/Anuragkushwah.Anuragkushwah.7?mibextid=ZbWKwL" target="_blank"><img
        src="./image and icon/facebook.png" alt="Facebook" loading="lazy" class="socicon" /></a>
    <a href="https://x.com/Iamanuragku21?t=GwyU4tDGjHE55gDyX1USlA&s=08" target="_blank"><img
        src="./image and icon/twitter.png" alt="Twitter" loading="lazy" class="socicon" /></a>
    <a href="https://instagram.com/iamanuragk21?igshid=NmQ2ZmYxZjA=" target="_blank"><img
        src="./image and icon/instagram.png" alt="Instagram" loading="lazy" class="socicon" /></a>
    <a href="https://www.linkedin.com/in/anurag-kushwah-a9b2801b4" target="_blank"><img
        src="./image and icon/linkedin.png" alt="Linkedin" loading="lazy" class="socicon" /></a>
    <a href="https://github.com/Anuragkushwah21" target="_blank"><img src="./image and icon/github.png" alt="Github"
        loading="lazy" class="socicon" /></a>
  </div>

    </>
  );
}

export default Home;
