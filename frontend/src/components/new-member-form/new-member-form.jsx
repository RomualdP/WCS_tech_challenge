import React from "react";
import "./new-member-form.css";

export default function NewMemberForm({
  argoName,
  setArgoName,
  argoData,
  setArgoData,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(argoName);
    console.log(argoData);
    setArgoData([
      ...argoData,
      {
        _id: Date.now(),
        name: argoName,
      },
    ]);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: argoName,
      }),
    };
    fetch(
      "https://wcs-tech-challenge.herokuapp.com/api/argonautes",
      requestOptions
    )
      .then(() => console.log("Nouvel argonaute"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          onChange={(e) => {
            setArgoName(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Envoyer
        </button>
      </form>
    </div>
  );
}
