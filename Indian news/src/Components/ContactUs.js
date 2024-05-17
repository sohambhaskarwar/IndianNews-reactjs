import React from "react";
import "./ContactUs.css"
export default function ContactUs() {
  return( <div class="ContactUs" style={{ marginTop: "100px" }}> 
  
  <div class="container_contact">
        <h1 class="maint">Animated Contact Form</h1>
        <div class="section animated bounceInLeft">
            <div class="brandname">
                <h3 >INDIAN NEWS</h3>
                <ul >
                    <li>+91 1234567890</li>
                    <li>contactus@newsindia.com</li>
                </ul>
            </div>
            <div class="contact">
                <h3>Email Me</h3>
                <form action="#">
                    <p>
                        <label for="#">Name</label>
                        <input type="text" name="name"/>
                    </p>
                    <p>
                        <label for="#">Company</label>
                        <input type="text" name="company"/>
                    </p>
                    <p>
                        <label for="#">Email Address</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label for="#">Phone Number</label>
                        <input type="text" name="phone"/>
                    </p>
                    <p class="full">
                        <label for="#">Message</label>
                        <textarea name="message" cols="30" rows="5"></textarea>
                    </p>
                    <p class="full">
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
  
  </div>)
}

//my form
// export default function ContactUs() {
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       const formData = new FormData(event.target);
//       const responseData = {};
  
//       for (const [key, value] of formData.entries()) {
//         responseData[key] = value;
//       }
  
//       try {
//         const response = await fetch("/submit-form", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(responseData),
//         });
  
//         if (!response.ok) {
//           throw new Error("Failed to submit form");
//         }
  
//         console.log("Form submitted successfully");
//         // Handle success
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         // Handle error
//       }
//     };
  
//     return (
//       <div className="ContactUs" style={{ marginTop: "100px" }}>
//         <div className="container_contact">
//           <h1 className="maint">Animated Contact Form</h1>
//           <div className="section animated bounceInLeft">
//             <div className="brandname">
//               <h3>INDIAN NEWS</h3>
//               <ul>
//                 <li>+91 1234567890</li>
//                 <li>contactus@newsindia.com</li>
//               </ul>
//             </div>
//             <div className="contact">
//               <h3>Email Me</h3>
//               <form onSubmit={handleSubmit}>
//                 <p>
//                   <label htmlFor="#">Name</label>
//                   <input type="text" name="name" />
//                 </p>
//                 <p>
//                   <label htmlFor="#">Company</label>
//                   <input type="text" name="company" />
//                 </p>
//                 <p>
//                   <label htmlFor="#">Email Address</label>
//                   <input type="email" name="email" />
//                 </p>
//                 <p>
//                   <label htmlFor="#">Phone Number</label>
//                   <input type="text" name="phone" />
//                 </p>
//                 <p className="full">
//                   <label htmlFor="#">Message</label>
//                   <textarea name="message" cols="30" rows="5"></textarea>
//                 </p>
//                 <p className="full">
//                   <button type="submit">Submit</button>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  