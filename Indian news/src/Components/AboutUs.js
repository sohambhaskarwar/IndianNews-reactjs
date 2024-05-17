import React from "react";
import  '../Components/AboutUs.css';
import harsh from '../harsh.jpg';
import soham from '../soham.jpg';
import vicky from '../vicky.jpg';


export default function AboutUs() {
  
    let name_style={
        textAlign:'center'
    }
  return(
  <div style={{ marginTop: "100px" }} className="container AboutUs">
<div className="about-section">
  <h1 style={{fontFamily:'Times new roman'}}>About Us</h1>
  <p>Welcome to Indian News ! We provide timely and accurate news coverage on various topics. Our experienced team is dedicated to delivering high-quality journalism and diverse perspectives. Contact us for feedback and stay informed with Indian News.</p>
</div>

<h2 style={{textAlign:"center",backgroundColor:'rgb(221, 212, 212)',marginTop:'10px'}}>Our Team</h2>


<div className="row flex justify-content-center" style={{margin:'30px'}}>
  
  <div className="column">
    <div className="card">
      <div className="container"> <img src={vicky} alt="Vicky Autade" style={{width:"100%",borderRadius:'50%',height:'300px'}}/> </div>
        <div className="container my-3" style={name_style}>
        <h2>Vicky Autade</h2>
        <p className="title">Developer</p>
        <p>vickyautade533@email.com</p>
        <p><a className="btn btn-dark" href="https://www.instagram.com/vicky_anil_autade?igsh=ZXllOWlsYjFxbm5o">Contact</a></p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
    <div className="container"> <img src={harsh} alt="Vicky Autade" style={{width:"100%",borderRadius:'50%',height:'300px'}}/> </div>

      <div className="container my-3" style={name_style}>
        <h2>Harsh Amble</h2>
        <p className="title">Developer</p>
        <p>ambleharsh@email.com</p>
        <p><a className="btn btn-dark" href="https://www.instagram.com/harsh_a_1634?igsh=MWJyZ2dmNHY0dzV3Ng==">Contact</a></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container"> <img src={soham} alt="Soham Bhaskarwar" style={{width:"100%",borderRadius:'50%',height:'300px'}}/>  </div>
      <div className="container my-3" style={name_style}>
        <h2>Soham Bhaskarwar</h2>
        <p className="title">Developer</p>
       
        <p>sohambhaskarwar@email.com</p>
        <p><a className="btn btn-dark"  href="https://www.instagram.com/soham_145_?igsh=MWloenN4YmFqOHR0Zw==">Contact</a></p>
      </div>
    </div>
  </div>


</div>

  </div>
  );
  
}
