import React from "react";
import { typography } from "./styles/global";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <h1 className={typography.heading}>Moin Coffee menü!</h1>
      <ProductList />
    </div>
  );
};

export default App;
