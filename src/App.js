import React from "react";
import './App.css'
import 'antd/dist/antd.css'

import { Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News } from "./components";
import{Layout,Typography,Space} from "antd"
import { Switch,Route,Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div classname="app">
        <Navbar></Navbar> 
      </div>

      <div classname="main">
      <Layout>
         <div className="routes">
           <Switch>
             <Route exact path="/">
              < Homepage/> <h1>hi</h1>
             </Route>
             <Route exact path="/exchanges">
              <Exchanges/>
             </Route>
             <Route exact path="/cryptocurrencies">
               <Cryptocurrencies/>
             </Route>
             <Route exact path="/crypto/:coinId">
               <CryptoDetails/>
             </Route>
             <Route exact path="/news">
               <News/>
             </Route>
           </Switch>
         </div>
      </Layout>
      
      <div className="footer">
      <Typography.Title level={5} style={{color:"white"}}>
        cryptoverse @2022<br/>
        All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
        </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
