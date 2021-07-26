import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { LOGIN } from '../../Graphql/Queries';
import { DisappearedLoading } from 'react-loadingg';
import notify from '../../utils/Notifier/Notifier';


export default function SignIn() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("") ;

    const [LoginF,{ loading, data }] = useLazyQuery(LOGIN);

    useEffect(() => {
       if (data) {
         if (data.Login) {
           notify(`Bienvenue ${data.Login.username} `,1);
           localStorage.setItem('auth',JSON.stringify(data.Login))
          window.location.pathname = '/'
           }else{
           notify(' Mot de passe ou username Incorrect')
         }
       }
       // eslint-disable-next-line
    }, [data])
  
    if (loading) return <div style={{textAlign:"center"}}>Connexion...<DisappearedLoading style={{position:"inherit !important",margin:'auto'}}  /></div>;
    return (
      <div className="box" style={{margin:"15px"}}>
      <div className="box-header">
         Bienvenue
      </div>
      <div className="box-body overflow-scroll">
      <form onSubmit={(e)=>{e.preventDefault() ; LoginF({variables:{data:{username,password}}}) ;  } } >
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input required type="text" placeholder='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={({target:{value}})=>setusername(value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input required type="password" placeholder="password" className="form-control" id="exampleInputPassword1" value={password} onChange={({target:{value}})=>setpassword(value)} />
    </div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    
    
        </div>
        
    </div>
    
    )
  }
