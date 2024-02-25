import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <ContactHeader></ContactHeader>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
};

export default App;
