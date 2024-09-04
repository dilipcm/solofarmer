import React from "react";
import ResponsiveAppBar from "./UI/Appbar";
import ProductScreen from "./components/ProductListing/ProductScreen";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <ProductScreen />
    </div>
  );
}
export default App;
