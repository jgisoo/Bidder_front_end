import React from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';

import CataloguePage from './components/CatalogueList';
import ItemPage from "./components/ItemPage";
import ItemDetails from './components/ItemDetails';
import PurchaseProcessing from './components/purchaseProcess';
import CreateListing from './components/createItem';
import LoginSignupPage from './components/login_signup';


function App() {
  return (
    <div>
    
      <CataloguePage />
      <ItemPage />
      <LoginSignupPage/>
      <PurchaseProcessing />
      <CreateListing/>
    </div>
 
  );
}

export default App;
