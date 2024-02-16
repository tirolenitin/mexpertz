import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div id="about">
        <div>
          <h6 className="container text-center py-4">DON'T MISS</h6>
          <h1 className="container text-center self-h1">Our News And Events</h1>
        </div>
        <div className="self-test">
          <div className="self-comment1">
            <div className="abImg">
              <img src="./assets/img/news1.jpg" />
            </div>
            <div className="abCon">
              <div className="container text-center ">
                <h6 className="container text-center ">
                  Nunc Volutput Venecies
                </h6>
                <p className="container text-center  ">
                  <span className="self-price">CATEGORY</span>
                </p>
                <p>
                  Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron
                  Silver  pies and selling them to restaurants and
                  his neighbors out of a small{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="self-comment1">
            <div className="abImg">
              <img src="./assets/img/news2.jpg" />
            </div>
            <div className="abCon">
            <div className="container text-center ">
                <h6 className="container text-center ">
                  Vestibulum Nisl Felis
                </h6>
                <p className="container text-center  ">
                  <span className="self-price">CATEGORY</span>
                </p>
                <p>
                  Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron
                  Silver began baking pies and selling them to restaurants and
                  his neighbors out of a small{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="self-comment1">
            <div className="abImg">
              <img src="./assets/img/news3.jpg" />
            </div>
            <div className="abCon">
            <div className="container text-center ">
                <h6 className="container text-center ">
                  Pron Eu Auge Efficitur
                </h6>
                <p className="container text-center  ">
                  <span className="self-price">CATEGORY</span>
                </p>
                <p>
                  Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron
                  Silver began baking pies and selling them to restaurants and
                  his neighbors out of a small{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
