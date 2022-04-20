import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/Navigation/navigation.component";

const Shop = () => {
  return (
    <div>
      <h1>I am Shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
