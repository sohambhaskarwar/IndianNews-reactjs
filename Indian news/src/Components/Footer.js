import React from "react";
import facebook from '../facebook.png';
import instagram from '../instagram.png';
import  twitter from '../twitter.png';
import icon from '../img.png';

export default function Footer() {
   let img_style={
        height:'25px',
        width:'25px'
    }
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            
            <span className="mb-3 mb-md-0 text-body-secondary">
            <img style={{ height: '30px', borderRadius: '5%', marginRight: '10px', border: '1px solid black' }} src={icon} />

            
              © 2024 Indian News . 
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-bodsy-secondary" href="https://www.instagram.com/soham_145_?igsh=MWloenN4YmFqOHR0Zw==" target="_blank">
             
                <img style={img_style} src={facebook}/>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.instagram.com/soham_145_?igsh=MWloenN4YmFqOHR0Zw==" target="_blank">
              <img style={img_style} src={instagram}/>
             

              </a>
            </li>

            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.instagram.com/soham_145_?igsh=MWloenN4YmFqOHR0Zw==" target="_blank">
              <img style={img_style} src={twitter}/>
              
              
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
