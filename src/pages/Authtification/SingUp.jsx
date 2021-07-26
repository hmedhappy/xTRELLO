import {  useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { REGISTER } from '../../Graphql/Mutations';
import notify from '../../utils/Notifier/Notifier';
import { DisappearedLoading} from 'react-loadingg'

export default function SingUp({setlog,log}) {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("") ;
  const [date, setdate] = useState(`${new Date()}`) ;

  const [Register,{ loading, data }] = useMutation(REGISTER);

  useEffect(() => {
    console.log({data});
     if (data) {
       if (data.Register._id) {
        setlog(!log)
         notify(`Vous etre inscrits, veuiller vous connecter `,1);
         }else{
         notify('Erreur Inscription ')
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
      <form onSubmit={(e)=>{e.preventDefault(); Register({variables:{data : {username,password,date_naissance:date}}})}} >
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" placeholder="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={({target:{value}})=>setusername(value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1" value={password} onChange={({target:{value}})=>setpassword(value)} />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Date Naissance</label>
    <input type="date" className="form-control" id="exampleInputPassword1" value={date} onChange={({target:{value}})=>setdate(value)} />
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
