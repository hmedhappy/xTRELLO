import { useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_OPERATIONS } from '../../Graphql/Queries'
import { DisappearedLoading  } from 'react-loadingg';


export default function Index() {
  
  const [getOperations, { data , loading}] = useLazyQuery(GET_OPERATIONS) ; 
  const [list, setlist] = useState([])
  useEffect(() => {
    getOperations();
    if (data?.getOperations) {
      setlist(data?.getOperations)
      console.log({listt:data.getOperations});
      
      }
    
  }, [data,getOperations])
    return (
        <>
          <div className="col-12">
        {/* ORDERS TABLE */}
        <div className="box" style={{margin:"15px"}}>
          <div className="box-header">
            Historique Colis
          </div>
          {loading 
          ? <DisappearedLoading/>
          :<div className="box-body overflow-scroll">
          <table>
            <thead>
              <tr>
                <th>Reference</th>
                <th>Designation</th>
                <th>Type Colis</th>
                <th>Nombre Piece</th>
                <th>Poid</th>
                <th>Volume</th>
                <th>Montant Reception</th>
              </tr>
            </thead>
            <tbody>
              {list?.map(({info_colis : {reference,designation,type_colis,nbr_piece,poid,volume,montant_a_reception}})=>
                <tr>
                <td>{reference}</td>
                <td>
                  <div className="order-owner">
                    <img src="./images/user-image-3.png" alt="user" />
                    <span>{designation}</span>
                  </div>
                </td>
                <td>{type_colis}</td>
                <td>
                {nbr_piece}
                </td>
                <td>
                  {/* <div className="payment-status payment-paid">
                    <div className="dot" />
                    <span>Paid</span>
                  </div> */}
                  {poid}
                </td>
                <td>{volume}</td>
                <td>{montant_a_reception}</td>
              </tr>
        )}
            </tbody>
          </table>
        </div>
      
          }
          </div>
        {/* END ORDERS TABLE */}
      </div>
       
        </>
    )
}
