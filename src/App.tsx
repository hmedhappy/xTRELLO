import React from 'react';
import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {onError} from '@apollo/client/link/error' ;

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import LoginLoyout from './layout/LoginLayout';
import DashboardLayout from './layout/DashboardLayout';

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import Dashboard from './pages/Dashboard'
import Livraisons from './pages/Livraisons'
import Historique from './pages/Historique'
import Authtification from './pages/Authtification'
import Brackets from './pages/Brackets'

require('dotenv').config()

const errorLink = onError(({graphQLErrors,networkError})=>{
    if (graphQLErrors) {
      graphQLErrors.map(({message,locations,path})=>{
        alert(`Graphql Error ${message}`)
        return ""
      })
    }
})


const link = from([
  errorLink,
  new HttpLink({uri:process.env.REACT_APP_BACKEND})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

function App() {
  // const [todos, settodos] = useState([])
  // const {data:{todos:dataa=[]}={todos:[]}} = useQuery(LOAD_TODOS)
  
  // useEffect(() => {
  //     console.log(dataa);
      
  //     settodos(()=>todos)
  //     // eslint-disable-next-line
  // }, [dataa]) // eslint-disable-next-line

  return (
    <div className='App'>
      <ApolloProvider client={client}>
      <BrowserRouter>
    <ToastContainer/>
      <Switch>
        <PublicRoute layout={LoginLoyout} component={Authtification} path="/login" />
        <PrivateRoute layout={DashboardLayout} component={Dashboard} path="/" exact/>
        <PrivateRoute layout={DashboardLayout} component={Livraisons} path="/commandes"/>
        <PrivateRoute layout={DashboardLayout} component={Historique} path="/historique"/>
        <PrivateRoute layout={DashboardLayout} component={Brackets} path="/brackets"/>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
