import React, { useState } from "react";

export default function NewMemberForm() {
  const [argoName, setArgoName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: argoName,
      }),
    };
    fetch("http://localhost:8080/api/argonautes", requestOptions)
      .then(() => console.log("Nouvel Argo"))
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
          value={argoName}
          onChange={(e) => setArgoName(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Envoyer
        </button>
      </form>
    </div>
  );
}
