import React, { useEffect, useState } from "react";
import Argonautes from "./member";
import "./member-list.css";

export default function NewMemberList() {
  const [argoData, setArgoData] = useState([]);
  useEffect(() => {
    const getArgos = () => {
      fetch("http://localhost:8080/api/argonautes")
        .then((response) => response.json())
        .then((data) => {
          setArgoData(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getArgos();
  }, [setArgoData]);

  return (
    <>
      <h2>Membres de l'équipage</h2>
      <section className="member-list">
        {argoData.map((argo) => (
          <Argonautes name={argo.name} key={argo._id} />
        ))}
      </section>
    </>
  );
}
