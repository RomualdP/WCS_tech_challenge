import React from "react";
import "./App.css";
import NewMemberForm from "./components/new-member-form/new-member-form";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import NewMemberList from "./components/member-list/member-list";

function App() {
  return (
    <div className="App">
      {/* <!-- Header section--> */}
      <Header />

      {/* <!-- Main section --> */}
      <main>
        {/* New member form */}
        <NewMemberForm />

        {/* <!-- Member list --> */}
        <NewMemberList />
      </main>
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
