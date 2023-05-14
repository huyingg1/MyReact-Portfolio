import React from "react";

export default function Portfolio() {
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
    portfolioContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    portfolioItem: {
      flex: "0 1 calc(50% - 10px)",
      margin: "5px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "10px solid rgb(75, 216, 235)",
    },
    img: {
      width: "500px",
      height: "400px",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Applications:</h1>
      <div style={styles.portfolioContainer}>
        <div style={styles.portfolioItem}>
          <figure class="shadow">
            <div class="appname">
              <p class="name">Workout Application</p>
              <a href="https://github.com/utgroup7/workout-buddy">
                GitHub Repository: Your Personal Workout Pal!
              </a>
            </div>
            <a href="https://utgroup7.github.io/workout-buddy">
              <img
                src="/Workout-Application-screenshot.png"
                alt="Workout-Application"
                style={styles.img}
              />
            </a>
          </figure>
        </div>
        <div style={styles.portfolioItem}>
          <figure class="shadow">
            <div class="appname">
              <p class="name">CarReview blog</p>
              <a href="https://github.com/group4project22023/Revved_up_Reviews">
                GitHub Repository: Revved Up Reviews
              </a>
            </div>
            <a href="https://revved-up-reviews.herokuapp.com/">
              <p>
                <img
                  src="/CarReview-blog.png"
                  alt="carreview-blog"
                  style={styles.img}
                />
              </p>
            </a>
          </figure>
        </div>
        <div style={styles.portfolioItem}>
          <figure class="shadow">
            <div class="appname">
              <p class="name">Calculator</p>
              <a href="https://github.com/huyingg1">
                GitHub Repository: React/JavaScript/CSS
              </a>
            </div>
            <p>
              <img src="/Calculator.jpg" alt="calculator" style={styles.img} />
            </p>
          </figure>
        </div>
        <div style={styles.portfolioItem}>
          <figure class="shadow">
            <div class="appname">
              <p href="https://github.com/huyingg1">Pastel Puzzels</p>
              <a href="https://github.com/huyingg1">
                GitHub Repository: MERN Stack
              </a>
            </div>
            <p>
              <img
                src="/Pastel-Puzzels.jpg"
                alt="pastel-puzzels"
                style={styles.img}
              />
            </p>
          </figure>
        </div>
        <div style={styles.portfolioItem}>
          <figure class="shadow">
            <div class="appname">
              <p class="name">Run Buddy</p>
              <a href="https://github.com/huyingg1">
                GitHub Repository: HTML/CSS
              </a>
            </div>
            <p>
              <img src="/Run-Buddy.jpg" alt="run-buddy" style={styles.img} />
            </p>
          </figure>
        </div>
      </div>
    </div>
  );
}
