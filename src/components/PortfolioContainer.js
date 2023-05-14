import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";

const listStyle = {
  border: "10px solid pink",
  display: "inline-block",
  margin: "30px",
};
const containerStyle = {
  display: "flex",
  justifyContent: "center",
};
const bannerStyle = {
  /*inset a banner between nav bar and main section*/
  banner: {
    height: "180px",
    position: "relative",
    width: "100%",
  },
  bannerlow: {
    height: "100px",
    position: "relative",
    width: "100%",
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <img
        src="/Nav-background.jpg"
        alt="banner"
        style={bannerStyle.banner}
      ></img>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <img
        src="/Nav-background.jpg"
        alt="banner"
        style={bannerStyle.bannerlow}
      ></img>
      <div style={containerStyle}>
        <ul style={{ listStyleType: "none" }}>
          {" "}
          {/* Optional: removes bullet points */}
          <li style={listStyle}>
            <a href="https://google.com">MyGmail</a>
          </li>
          <li style={listStyle}>
            <a href="https://github.com/huyingg1">GitHub</a>
          </li>
          <li style={listStyle}>
            <a href="https://twitter.com">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
