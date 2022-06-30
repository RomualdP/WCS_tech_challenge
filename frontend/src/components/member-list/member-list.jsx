import React, { useEffect } from "react";
import Argonautes from "./member";
import "./member-list.css";

export default function NewMemberList({ argoData, setArgoData }) {
  useEffect(() => {
    const getArgos = () => {
      fetch("https://wcs-tech-challenge.herokuapp.com/api/argonautes")
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
