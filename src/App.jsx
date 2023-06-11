import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/main/LandingPage";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Beginer from "./components/pages/Beginer";
import A1 from "./components/pages/A1";
import Cards from "./components/Cards";
import Pronouns from "./components/pages/A1/Pronouns";

function App() {
  return (
    <div className="">
      <div>
        <Header />
        {/* <LandingPage /> */}
        {/*  <Beginer />
        <A1 /> */}
        <Pronouns />
        {/*     <Cards /> */}
        {/* <Routes>
          <Route path="/Home" element={<LandingPage />} />
        </Routes> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
