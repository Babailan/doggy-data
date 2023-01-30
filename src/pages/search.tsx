import Layout from "@theme/Layout";
import React, { useState } from "react";

function SearchBox({ setInput }) {
  return (
    <input
      type={"text"}
      onChange={(e) => setInput(e.target.value)}
      placeholder={"Search a dog"}
    ></input>
  );
}

function Search() {
  const [input, setInput] = useState("");

  return (
    <Layout>
      <SearchBox setInput={setInput} />
    </Layout>
  );
}

export default Search;
