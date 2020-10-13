import React from 'react'
import Navbar from './NewComponent/NavBar';
import MainContent from './NewComponent/MainContent'
import Footer from './NewComponent/Footer'
import Image from './NewComponent/Images'
import Forms from './NewComponent/Forms'
import Quotes from './NewComponent/Quotes';
import SignUp from './NewComponent/SignUp';
import Buildings from './NewComponent/Buildings';
import Signup from './NewComponent/SignUp';
import Login from './NewComponent/Login';


function App() {
  return (
    <div className="App">
     <h1>Victor Abrokwah</h1>

     <Navbar />
       <MainContent/>
       <Image />
       
        <Quotes/>
        <SignUp />
        <Buildings/>
        {/*<Project />
        <About />
        */}
         <Forms/>
       <Footer/>
        
    </div>
    
  );
}

export default App;
