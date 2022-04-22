import React from 'react';
import './about.css';

export default function About() {
  return (
    <div>
      <div className="about__title">About</div>
      <div className="about__container">
        <div className="about__info">
          <h3>Hey! here is some info</h3>
          <h4>Paola Barbosa Medina</h4>
          <p>
            I am an Environmental engineer in the wonderland of coding,
            happy to be able to unleash my create self in web development.
            This project was mas as an assessment for Make it Real Camp which
            has been such an experience, I have learned about:
          </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
          </ul>
          <p>Want to reach out? I am just one email away! p.barbosa93@gmail.com</p>
          <a href="https://github.com/PaoBrs" target="_blank" rel="noreferrer">Here is my github</a>
        </div>
        <div>
          <img className="about__image" src={require('../../assets/about.png')} alt="Me" />
        </div>
      </div>
    </div>
  );
}
