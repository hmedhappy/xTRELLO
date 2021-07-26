import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, layout: Layout, ...rest }) {
  
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          {JSON.parse(localStorage.getItem('auth')) ? <Component {...props}></Component> : <Redirect to="/login" />}
        </Layout>
      )}
    ></Route>
  );
}

export default PrivateRoute;
