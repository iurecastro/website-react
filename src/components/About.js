// src/components/About.js
import React from 'react'; // Importa a biblioteca React

const About = () => {
  return (

    <div>
      <h1>About</h1>
      <section className="my-4">
        <h2>Mission</h2>
        <p>My goal is to provide a simple and intuitive platform that demonstrates the use of React.js and Bootstrap 5 in a real project. We aim to help developers learn and effectively implement these technologies.</p>
      </section>
      <section className="my-4">
        <h2>Technologies Used</h2>
        <ul>
          <li><strong>React.js:</strong> A JavaScript library for building user interfaces.</li>
          <li><strong>Bootstrap 5:</strong> A powerful front-end framework for faster and easier web development.</li>
          <li><strong>React Router:</strong> A standard library for routing in React.</li>
        </ul>
      </section>
      <section className="my-4">
        <h2>About the Developer</h2>
        <p>Hi, I'm Iure Castro, a passionate web developer with experience in creating dynamic and responsive web applications. This project is a demonstration of my skills in React.js and Bootstrap 5.</p>
        <p>If you have any questions or feedback, feel free to reach out!</p>
      </section>
      {/* Informações sobre a página */}
    </div>
  );
}

export default About; // Exporta o componente para ser usado em outros lugares
