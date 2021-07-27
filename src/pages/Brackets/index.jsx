import React, { useState } from 'react';
import TaskCard from './TaskCard'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CardAvatar from './CardAvatar'



export default function Index() {
  const [ramdom, ] = useState(Math.floor(Math.random()*30+5))

  return (
    <>
    <div>
    <div style={{background:'#fff',padding:'17px 5px 0px 26px',display:'flex',justifyContent: 'space-between'}}>
      <h3 style={{fontWeight:'bolder',color:'black'}}>Brackets</h3>
      <div className="d-flex justify-content-between align-items-center " style={{marginRight:'43px'}}>
      <AvatarGroup max={4} spacing={'small'}>
                  {[...new Array(ramdom)].map(e=><CardAvatar/>)}
      </AvatarGroup>
        <h5 className="m-3" style={{cursor:"pointer"}}><b>Menu</b></h5>
      </div>
    </div>
      <section className='lists-container'>
        <div className='list'>
          <h3 className='list-title d-flex justify-content-between align-items-center'>Design<i class="fas fa-ellipsis-h" style={{cursor:"pointer"}}></i></h3>
         <ul className='list-items'>
          {[...new Array(Math.floor(Math.random()*9+1))].map((e,i,array)=><TaskCard length={array.length}/>)}
         </ul>
          <button className='add-card-btn btn list-title'>
            Add a card
          </button>
        </div>
        <div className='list'>
          <h3 className='list-title d-flex justify-content-between align-items-center'>Prototip <i class="fas fa-ellipsis-h" style={{cursor:"pointer"}}></i></h3>
          <ul className='list-items'>
          {[...new Array(Math.floor(Math.random()*9+1))].map((e,i,array)=><TaskCard length={array.length}/>)}
         </ul>
          <button className='add-card-btn btn list-title'>
          <i class="far fa-plus-square"></i> Add a card 
          </button>
        </div>
        <div className='list'>
          <h3 className='list-title d-flex justify-content-between align-items-center'>Trello <i class="fas fa-ellipsis-h" style={{cursor:"pointer"}}></i></h3>
          <ul className='list-items'>
          {[...new Array(Math.floor(Math.random()*9+1))].map((e,i,array)=><TaskCard length={array.length}/>)}
         </ul>
          <button className='add-card-btn btn list-title'>
          <i class="far fa-plus-square"></i>  Add a card 
          </button>
        </div>
        <div className='list'>
          <h3 className='list-title d-flex justify-content-between align-items-center'>Final <i class="fas fa-ellipsis-h" style={{cursor:"pointer"}}></i></h3>
          <ul className='list-items'>
          {[...new Array(Math.floor(Math.random()*9+1))].map((e,i,array)=><TaskCard length={array.length}/>)}
         </ul>
          <button className='add-card-btn btn list-title'>
          <i class="far fa-plus-square"></i>  Add a card 
          </button>
        </div>
       
       <button className='add-list-btn btn  list-title'>
       <i class="far fa-plus-square"></i>  Add a list 
        </button>
      </section>

        </div>
      <style jsx>
        {`
          .stat-card {
            height: 8px;
            width: 55px;
            background-color: #1ad698;
            margin: 1px;
            border-radius: 5px;
          }

          .list-items::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  );
}

