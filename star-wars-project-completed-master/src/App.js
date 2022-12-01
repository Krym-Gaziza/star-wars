import { useState } from "react";
import { DefaultContext } from "./Contexts";
//importing styles
import "./App.css";

//importing components
import { Header } from "./components/header";
import { Content } from "./components/content";

export default function App() {
  const [fan, setFan] = useState("");

  const handleChooseFan = ({ name }) => {
    setFan(name);
  };


  return (
    <DefaultContext.Provider value={{ handleChooseFan, fan }}>
      <Header />
      <hr />
      <Content />
    </DefaultContext.Provider>
  );
}
