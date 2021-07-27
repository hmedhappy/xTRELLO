import React from 'react'
import RecentlyViewed from './RecentlyViewed'
import NewTasks from './NewTasks'
import ProcessTask from './ProcessTask'
import CompletedTask from './CompletedTask'


import './dashboard.css'
export default function index() {
    return (
        <>
       <div className="mainTab">
<RecentlyViewed />
<NewTasks/>
<ProcessTask/>
<CompletedTask/>
</div>
<style>
       {`

       
       .carddd{
        width: 370px;
        height: 200px;
        background-color: #add8e6b0;
        border-radius: 10px;
        margin: 5px;
        cursor:pointer;

       }
       .carddd:hover{
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
       .card-slidee{
        display: -webkit-box;
        overflow-x: scroll;
        width: 80vw !important;
        background-color: #fff ;
        padding: 0px 17px;

       }

       .card-slidee::-webkit-scrollbar-track {
        background: red !important;
      }

      body::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
      }

       


       `}
   </style>
  
        </>
    )
}
