// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <!-- Header section--> */}
      <header className="App-header">
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      {/* <!-- Main section --> */}
      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        {/* New member form */}
        <form className="new-member-form">
          <label for="name">Nom de l&apos;Argonaute</label>
          <input id="name" name="name" type="text" placeholder="Charalampos" />
          <button type="submit">Envoyer</button>
        </form>

        {/* <!-- Member list --> */}
        <h2>Membres de l'équipage</h2>
        <section className="member-list">
          <div className="member-item">Eleftheria</div>
          <div className="member-item">Gennadios</div>
          <div className="member-item">Lysimachos</div>
        </section>
      </main>

      {/* Footer section */}
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
