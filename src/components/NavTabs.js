import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function NavTabs({ currentPage, handlePageChange }) {
  const navContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "rgba(12, 11, 11, 0.849)",
  };

  const nameStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    marginLeft: "5px",
    color: "white",
  };

  return (
    <div style={navContainerStyle}>
      <div style={nameStyle}>Yingge Hu</div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contactme"
            onClick={() => handlePageChange("ContactMe")}
            className={
              currentPage === "ContactMe" ? "nav-link active" : "nav-link"
            }
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
