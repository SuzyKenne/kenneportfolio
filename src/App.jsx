import React from 'react'
export const App = () => {
     return ( <div>
         App 
         </div> ) }


import './index.css';
import Header from './components/header/Header'
 import Navbar from './components/navbar/Navbar'
 import About from './components/about/about'
 import Experience  from './components/experience/Eperience' 
   import Services from './components/services/Services' 
   import Portfolio from './components/portfolio/Portfolio' 
   import Testimonial from './components/testimonial/Testimonial'
    import Contact from './components/contact/Contact' 
    import Footer from './components/footer/Footer'

function App() {
     return ( 
     <> 
     <Header/>
     <About/>
     <Experience/>
     <Footer/>
     <Navbar/>
     <Contact/>
    
      
 </>
);
}
export default App;
