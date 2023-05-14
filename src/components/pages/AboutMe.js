import React from "react";

// Define some styles
const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  title: {
    fontSize: "2em",
    color: "#333",
  },
  text: {
    fontSize: "1em",
    marginTop: "20px",
    marginBottom: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    paddingLeft: "40%",
  },
};

export default function AboutMe() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Me:</h1>
      <p style={styles.text}>
        Enthusiastic BI Analyst eager to contribute to team success through hard
        work, attention to detail and excellent organizational skills. Clear
        understanding of Data Analyzes and training in BI regarding Motivated to
        learn, grow and excel in Mathematics and Statistics in BI Analyzation.
        <br />
        <br />
        Organized and dependable candidate successful at managing multiple
        priorities with a positive attitude. Willingness to take on added
        responsibilities to meet team goals.
      </p>
      <img style={styles.image} src="/selfphoto.png" alt="selfphoto" />
    </div>
  );
}
