import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Skill from'./components/Skill/Skill'
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import BlurBlob from './components/BlurBlob';

function App() {
  return (
    <div className="bg-[#050414]">
      {/* Background Blob Decoration */}
      <BlurBlob
        position={{ top: '35%', left: '20%' }}
        size={{ width: '30%', height: '40%' }}
      />

      {/* Background Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Main Content */}
     <div>
      <div>
         <div className="relative-pt-20">
        <Navbar />  
        <About />
        <Skill />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
      </div>
     </div>
    </div>
    
  );
}

export default App;
