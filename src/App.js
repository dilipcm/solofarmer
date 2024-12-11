import React from "react";
import Navbar from "./UI/Navbar";
import ProductScreen from "./components/ProductListing/ProductScreen";
import Box from "@mui/material/Box";
import Footer from "../src/UI/Footer.js";
function App() {
  return (
    <>
      <Navbar />
      <Box sx = {{
        width:'80%',margin:'auto'
      }}>
         <ProductScreen />
      </Box>
      <Footer />
    </>
  );
}
export default App;
