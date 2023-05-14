import React from "react";

const styles = {
  title: {
    fontSize: "2em",
    color: "#333",
  },
  resumeContainer: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "5px",
  },
  downloadLink: {
    display: "block",
    marginBottom: "20px",
  },
  proficienciesContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  proficiencies: {
    width: "45%",
  },
};

export default function Resume() {
  return (
    <div style={styles.resumeContainer}>
      <h1 style={styles.title}>Resume:</h1>
      <span style={styles.downloadLink}>
        Download My{" "}
        <a href="https://huyingg1.github.io/MyPortfolio.github.io/portfolioweb.html">
          Resume
        </a>
      </span>
      <div style={styles.proficienciesContainer}>
        <span className="Front" style={styles.proficiencies}>
          <h4>Front-end Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </span>
        <span className="Back" style={styles.proficiencies}>
          <h4>Back-end Proficiencies</h4>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </span>
      </div>
    </div>
  );
}
