import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DefaultLayout from "./layouts/DefaultLayout";
import SingoloProdotto from "./pages/SingoloProdotto";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Prodotti" element={<Prodotti />} />
          <Route path="/Prodotti/:id" element={<SingoloProdotto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
