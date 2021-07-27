import React from 'react'
import RecentlyViewed from './RecentlyViewed'
import NewTasks from './NewTasks'
import ProcessTask from './ProcessTask'
import CompletedTask from './CompletedTask'


import './dashboard.css'
export default function index() {
    return (
        <>
       
<RecentlyViewed />
<NewTasks/>
<ProcessTask/>
<CompletedTask/>

<style>
       {`

       
       .carddd{
        width: 370px;
        height: 200px;
        background-color: #add8e6b0;
        border-radius: 10px;
        margin: 5px;
       }
       .card-slidee{
        display: -webkit-box;
        overflow-x: scroll;
        width: 85vw !important;
        background-color: #fff ;
        padding: 0px 17px;

       }

       ::-webkit-scrollbar-track {
        background: red !important;
      }

       


       `}
   </style>
  
        </>
    )
}
