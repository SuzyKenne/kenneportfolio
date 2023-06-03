import React from 'react'
import './services.css'
import ListServices from './ListServices'


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <div className="services_frontend"></div>
        <h3>FRONTEND DEVELOPER</h3>
        <h4>BACKEND DEVELOPER</h4>
        
        <ListServices />
      </div>
    </section>
  );
}
export default Services;
