import { useEffect } from "react";
import { cardData, sliderList } from "./components/data.json";
import { Home } from "./Home";
import { CardFormV2 } from "./components/formComp/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SliderForm } from "./components/formComp/SliderForm";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("cardData")) {
      localStorage.setItem("cardData", JSON.stringify(cardData));
    }
    if (!localStorage.getItem("sliderList")) {
      localStorage.setItem("sliderList", JSON.stringify(sliderList));
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/create" element={<Create />} /> */}
          <Route path="/editForm/:id" element={<CardFormV2/>} />
          <Route path="/sliderFormForm/:id" element={<SliderForm/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
