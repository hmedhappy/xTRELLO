import React from 'react'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CardAvatar from '../Brackets/CardAvatar'
import TextTask from './TextTask';


export default function NewTasks() {
    return (
        <>
           
           <div style={{background:'#fff',padding:'17px 5px 0px 26px',display:'flex',justifyContent: 'space-between'}}>
      <h3 style={{fontWeight:'bolder',color:'black'}}>Completed</h3>
      <div className="d-flex justify-content-between align-items-center ">
      <AvatarGroup max={4} spacing={'small'}>
                  {[...new Array(Math.floor(Math.random()*30+5))].map(e=><CardAvatar/>)}
      </AvatarGroup>
        <h5 className="m-3" style={{cursor:"pointer"}}><b>Menu</b></h5>
      </div>
    </div>
       <div className="card-slidee">
       {[...new Array(5)].map(e=><TextTask />)}

   </div>
   
        </>
    )
}
