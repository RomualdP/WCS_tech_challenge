import React, { useState, useEffect } from "react";
import Argonautes from "./member";
import "./member-list.css";

export default function NewMemberList() {
  const [argosData, setArgosData] = useState([]);

  useEffect(() => {
    const getArgos = async () => {
      const url = "http://localhost:8080/api/argonautes";

      try {
        const resp = await fetch(url);
        const data = await resp.json();

        setArgosData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getArgos();
  }, []);
  const argonautes = argosData.map((argo) => {
    return <Argonautes name={argo.name} key={argo._id} />;
  });
  return (
    <>
      <h2>Membres de l'équipage</h2>
      <section className="member-list">{argonautes}</section>
    </>
  );
}
