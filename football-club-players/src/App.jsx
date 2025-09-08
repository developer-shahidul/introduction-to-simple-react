import "./App.css";
import Nav from "./component/navbar/nav";
import Banner from "./component/navbar/Banner";
import Players from "./component/Abilavil players/Players";
import Footer from "./component/footer/Footer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [freeCradit, setFreeCradit] = useState(1000);

  // alart
  const notify = () => toast.success("Cradit Added to your Account!");
  const handlerFreeCradit = () => {
    notify();
    const newCradit = parseInt(freeCradit) + 60000000;
    setFreeCradit(newCradit);
    // console.log(newCradit);
  };

  return (
    <>
      <Nav freeCradit={freeCradit}></Nav>
      <Banner handlerFreeCradit={handlerFreeCradit}></Banner>
      <Players freeCradit={freeCradit} setFreeCradit={setFreeCradit}></Players>
      <Footer></Footer>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
