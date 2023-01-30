import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { CSSProperties, useState } from "react";
import SearchBox from "../components/SearchPage/SearchBox";
import Card from "../components/SearchPage/DogCard/DogCard";
import axios from "axios";

const mainStyle: CSSProperties = {
  padding: "1em",
};
const containerStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
    </div>
  );
}

function Search() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    setLoading(true);
    const result = await axios.get("/api/breeds/search?q=" + text);
    setData(result.data);
    setLoading(false);
  };
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <main style={mainStyle}>
        <SearchBox onSearch={onSearch} setState={setText} />
        {loading ? <Loading /> : null}
        <div style={containerStyle}>
          {data.map(({ settings, _id, breed }) => {
            const breedname = settings.current_breed;
            const name = settings.breed_data.basics[breedname].breed_name;
            const img = breed.puppies.image.src;
            return <Card key={_id} name={name} img={img} />;
          })}
        </div>
      </main>
    </Layout>
  );
}

export default Search;
