import React from "react";
import styles from "./styles.module.css";
function OpenSource() {
  return (
    <div className={styles.container}>
      <h1>Open Source & Free</h1>
      <p>
        Concentrate on developing your amazing app and leave the incoming
        requests to us. We've got this handled.
      </p>
      <a className={styles.button}>Explore the GitHub Repositories</a>
    </div>
  );
}

export default OpenSource;
