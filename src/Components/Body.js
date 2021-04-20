import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import propic from "./images/ProPic1.jpeg";
import { Projects } from "./Projects";
import SecProj from "./SectionProject";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proj: Projects,
    };
  }

  render() {
    return (
      <div>
        <section id='about' className='aboutMe'>
          <div className='container-fluid p-0 pl-4'>
            <h1 style={{ textAlign: "center", fontSize: "3rem" }}>ABOUT ME</h1>
            <div className='row aboutRow col-12 mt-5'>
              <div
                className='aboutPic col-12 col-md-4 col-xl-3 ml-5'
                data-aos='fade-left'
                data-aos-delay='300'
                data-aos-duration='1200'
                data-aos-once='false'
              >
                <img id='profPic' src={propic} alt='Arif Mohammed' />
              </div>
              <div
                className='aboutContent col-12 col-md-6'
                data-aos='fade-right'
                data-aos-delay='300'
                data-aos-duration='1200'
                data-aos-once='false'
                data-aos-mirror='true'
              >
                <p>
                  Enthusiastic programmer motivated to learn, grow and excel in
                  ME<span style={{ color: "#fdb827" }}>R</span>N Stack,
                  currently finalizing B.tech Computer Science and prepared to
                  contribute to organizational success while developing new
                  skills and gaining real-world experience. Highly organized,
                  responsible and well-versed in Full Stack Development.
                  Positively impacts operations with good communication and
                  critical thinking skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='projects' className='projectSection'>
          <SecProj project={this.state.proj} />
        </section>
      </div>
    );
  }
}

export default Body;
