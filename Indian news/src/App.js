import "./App.css";
import React, {  useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
const  api_key = process.env.REACT_APP_NEWS_API;




// const SearchItemFunction = (searching) => {
//   setState({item:searching});
// };


const [progress,setprogress] =useState(0); 


  const Setprogress = (something) => {
    setprogress(something);
    
  };


    return (
      <>
        <Router>
          <Navbar  />
          <LoadingBar
            shadow={true}
            loaderSpeed={2000}
            waitingTime={1500}
            color="#f11946"
            progress={progress}
            height={4}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  api_key={api_key}
                  Progress={Setprogress}
                  pageSize={12}
                  key={"general"}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  api_key={api_key}
                  Progress={Setprogress}
                  pageSize={12}
                  key={"business"}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  api_key={api_key}
                  Progress={Setprogress}
                  pageSize={12}
                  key={"entertainment"}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  api_key={api_key}
                  Progress={Setprogress}
                  pageSize={12}
                  key={"health"}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  api_key={api_key}
                  Progress={Setprogress}
                  pageSize={12}
                  key={"science"}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  api_key={api_key}
                  Progress={Setprogress}
                  pageSize={12}
                  key={"sports"}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  api_key={api_key}
                  Progress={Setprogress}
                  pageSize={12}
                  key={"technology"}
                  category="technology"
                />
              }
            />

            {/* <Route
              exact
              path={`${item}`}
              element={<News api_key={api_key} progress={Setprogress} ChangeCategory={ChangeCategory} category={state.item} pageSize={12} key={state.item}/>}
            /> */}


            <Route
              exact
              path="/AboutUs"
              element={<AboutUs/>}
            />
            <Route exact path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </Router>

        <Footer />
      </>
    );
  }

