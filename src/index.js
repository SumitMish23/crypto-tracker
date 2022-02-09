import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route,Link} from 'react-router-dom'
import {Layout,Typography,Space} from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import 'antd/dist/antd.css'

ReactDOM.render(<Router><App/></Router>,document.getElementById('root'));