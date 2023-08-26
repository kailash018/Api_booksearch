import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>
Book Hub helps to connect readers with their favourite books all over the world.<br/>
‍We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them thrive.</p>
            <p className='fs-17'>Our platform gives independent bookstores tools and details about books like no of edition, subject, summary and its cover page , that helps the user to easily track their love for book.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
