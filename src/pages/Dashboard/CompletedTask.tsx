import React from 'react'

import SingleCard from './SingleCard'

export default function NewTasks() {
    return (
        <>
             <div className="main">
 <div className="main-content">
    <div className="row">
      <div className=" col-sm-12">
        {/* TOP PRODUCT */}
        <div className="box f-height">
          <div className="box-header">
            Completed
          </div>
          <div className="box-body">
            <div>
              <SingleCard/>
              <SingleCard/>
              <SingleCard/>
              <SingleCard/>
               </div>
          </div>
        </div>
        {/* TOP PRODUCT */}
      </div>
      </div>
  </div>
</div>
   
        </>
    )
}
