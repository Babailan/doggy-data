import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import logo from "../../../static/img/logo.png";

function IntroPage() {
  return (
    <section className={styles.container}>
      <div className={styles.leftcol}>
        <p className={styles.brief_intro}>
          Our dog API is a comprehensive resource for information about
          different dog breeds, featuring an easy-to-use interface, breed
          information, images, search functionality, and more. It is designed to
          be a valuable and reliable resource for anyone interested in learning
          about different dog breeds.
        </p>
      </div>
      <div className={styles.rightcol}>
          <p className={styles.brief_intro}>
          Our dog API is a comprehensive resource for information about
          different dog breeds, featuring an easy-to-use interface, breed
          information, images, search functionality, and more. It is designed to
          be a valuable and reliable resource for anyone interested in learning
          about different dog breeds.
        </p>
      </div>
      <div></div>
    </section>
  );
}

export default IntroPage;
