import React, { useState } from "react";
import "./App.css";
import NewMemberForm from "./components/new-member-form/new-member-form";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import NewMemberList from "./components/member-list/member-list";

function App() {
  const [argoData, setArgoData] = useState([]);
  const [argoName, setArgoName] = useState();
  return (
    <div className="App">
      {/* <!-- Header section--> */}
      <Header />

      {/* <!-- Main section --> */}
      <main>
        {/* New member form */}
        <NewMemberForm
          argoName={argoName}
          setArgoName={setArgoName}
          argoData={argoData}
          setArgoData={setArgoData}
        />

        {/* <!-- Member list --> */}
        <NewMemberList
          argoName={argoName}
          argoData={argoData}
          setArgoData={setArgoData}
        />
      </main>
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
