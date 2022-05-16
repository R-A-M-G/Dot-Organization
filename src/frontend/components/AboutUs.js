import React  from "react";
import "./style/AboutUs.css"
import Contact from "./Contact"

const AboutUs = () => {
  return (
    // <div className="container-fluid mt-5">
      <div>
          <link rel="stylesheet" href="./About.css" />
          <link rel="stylesheet" href="./font-awesome.css" />
          {/* <link rel="stylesheet" href="./aos.css"> */}
          <section className="about-section sec-padding" id="about">
            <div className="container">
              <div className="row">
                <div className="section-title">
                  <h2 data-title="our story" data-aos="fade-up">about us</h2>
                </div>
              </div>
              <div className="row">
                <div className="about-text" data-aos="fade-right">
                  <h3>Welcome To Dot.. organisation</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quam vitae tempore. Aliquid, voluptates ducimus!LoremIllo quam vitae tempore. Aliquid, voluptates ducimus!</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quam vitae tempore. Aliquid, voluptates ducimus!LoremIllo quam vitae tempore. Aliquid, voluptates ducimus!</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique illum a cum dicta rerum laboriosam nihil nulla eligendi expedita magnam facilis voluptas, aspernatur consequuntur et?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, aliquam! Voluptatibus natus aspernatur quidem iusto ipsam, ratione, et veniam aliquid impedit molestias ea explicabo blanditiis!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis dolore non saepe explicabo unde aperiam recusandae alias dicta atque, quaerat facilis distinctio doloribus quisquam?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum, deserunt, nisi esse sequi, molestiae vitae quae quibusdam aspernatur corporis excepturi nemo ea illo ratione?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nulla debitis accusamus exercitationem, vero ullam!</p>
                  <a href="#explore" className="btn btn-default">Explore more</a>
                </div>
                <div className="about-img" data-aos="fade-left">
                  <div className="img-box">
                    <img className="coverImg" src={require('./Images/cover.jpg')} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="team-section sec-padding" id="team">
            <div className="container">
              <div className="row">
                <div className="section-title">
                  <h2 data-title="team" data-aos="fade-up">our creaters</h2>
                </div>
              </div>
              <div className="row">
                <div className="team-item" data-aos="flip-left" data-aos-duration={1000}>
                  <img className="profileImg" src={require('./Images/Gaurav.jpeg')} />
                  <div className="team-item-info">
                    <h3>Gaurav Maheshwari</h3>
                    <p>( 20BCS9908 )</p>
                  </div>
                </div>
                <div className="team-item" data-aos="flip-left" data-aos-duration={1000}>
                  <img className="profileImg" src={require('./Images/Abhijeet.jpeg')} />
                  <div className="team-item-info">
                    <h3>Abhijeet kumar</h3>
                    <p>( 20BCS9915 )</p>
                  </div>
                </div>
                <div className="team-item" data-aos="flip-left" data-aos-duration={1000}>
                  <img className="profileImg" src={require('./Images/Muskan.jpeg')} />
                  <div className="team-item-info">
                    <h3>Muskan Deswal</h3>
                    <p>( 20BCS9894 )</p>
                  </div>
                </div>
                <div className="team-item" data-aos="flip-left" data-aos-duration={1000}>
                  <img className="profileImg" src={require('./Images/Rajnish.jpeg')} />
                  <div className="team-item-info">
                    <h3>Rajnish Patel</h3>
                    <p>( 20BCS9921 )</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer" id="footer">
            <div className="container">
                  <Contact/>
              <div className="row">
                <div className="copyright">
                  © 2022 - A Dot Organization Product
                </div>
              </div>
            </div>
          </footer>
        </div>
    // </div>
  );
};

export default AboutUs;
