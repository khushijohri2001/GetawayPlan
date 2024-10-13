import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

// Reference
// https://www.youtube.com/watch?v=k3Vfj-e1Ma4
// https://www.youtube.com/watch?v=309beMyhXtg
// https://www.youtube.com/watch?v=w_PxLGCBRuA
// https://www.youtube.com/watch?v=nQeCtHxC93A&list=PLflVqQLAWzC9qybF40gPXpzntMQIoYG5u
// https://traveltriangle.com/
