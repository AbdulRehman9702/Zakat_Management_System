import React from "react";
import person1 from "../assets/img/gallery/person_1.jpg";
import person2 from "../assets/img/gallery/person_2.jpg";
import person3 from "../assets/img/gallery/person_3.jpg";
import person4 from "../assets/img/gallery/person_4.jpg";

const Leadership = () => {
  return (
    <div class="row mt-5">
      <div class="col-md-12 mb-5 text-center mt-5">
        <h2>Leadership</h2>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="block-38 text-center">
          <div class="block-38-img">
            <div class="block-38-header">
              <img src={person1} alt="person" />
              <h3 class="block-38-heading">Greeg Graham</h3>
              <p class="block-38-subheading">CEO</p>
            </div>
            <div class="block-38-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aut minima nihil sit distinctio recusandae doloribus ut fugit
                officia voluptate soluta.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="block-38 text-center">
          <div class="block-38-img">
            <div class="block-38-header">
              <img src={person2} alt="person" />
              <h3 class="block-38-heading">Jennifer Greive</h3>
              <p class="block-38-subheading">President</p>
            </div>
            <div class="block-38-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aut minima nihil sit distinctio recusandae doloribus ut fugit
                officia voluptate soluta.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="block-38 text-center">
          <div class="block-38-img">
            <div class="block-38-header">
              <img src={person3} alt="person" />
              <h3 class="block-38-heading">Patrick Marx</h3>
              <p class="block-38-subheading">Marketer</p>
            </div>
            <div class="block-38-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aut minima nihil sit distinctio recusandae doloribus ut fugit
                officia voluptate soluta.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="block-38 text-center">
          <div class="block-38-img">
            <div class="block-38-header">
              <img src={person4} alt="person" />
              <h3 class="block-38-heading">Mike Coolbert</h3>
              <p class="block-38-subheading">Partner</p>
            </div>
            <div class="block-38-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aut minima nihil sit distinctio recusandae doloribus ut fugit
                officia voluptate soluta.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
