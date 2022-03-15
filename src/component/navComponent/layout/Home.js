import React from "react";
import PortfolioSection from "../../portfolio/PorfolioSection";
import MyProfile from "../../profiles/MyProfile";


const Home = ({display}) => {

  return (
    <div style={{marginTop: '70px'}}>
      <div style={{display:display}}><MyProfile /> </div>
      <div style={{display:display}}><PortfolioSection /></div>
      <div style={{display:display}}></div>
    </div>
  );
};

export default Home;