import React from "react";
import styles from "./styles.module.css";

function Button({ description, href }) {
  return (
    <a href={href} className={styles.button} title={"Click me."}>
      {description}
    </a>
  );
}

function IntroPage() {
  return (
    <section className={styles.container}>
      <div className={styles.leftcol}>
        <h1>Doggy Data</h1>
        <p className={styles.brief_intro}>
          Our dog API is a comprehensive resource for information about
          different dog breeds, featuring an easy-to-use interface, breed
          information, images, search functionality, and more. It is designed to
          be a valuable and reliable resource for anyone interested in learning
          about different dog breeds.
        </p>
        <Button description={"Learn more"} href={"/docs/intro"} />
      </div>
      <div className={styles.seperator}></div>
      <div className={styles.rightcol}>
        <small>Click the search button to search for dogs</small>
        <Button href={"/search"} description={"Search a dog"} />
      </div>
      <div></div>
    </section>
  );
}

export default IntroPage;
