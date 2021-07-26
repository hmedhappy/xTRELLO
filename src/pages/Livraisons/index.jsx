import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { ADD_OPERATION } from '../../Graphql/Mutations';
import notify from '../../utils/Notifier/Notifier';
import InfoColis from './InfoColis'
import { DisappearedLoading} from 'react-loadingg'


import InfoEnlevement from './InfoEnlevement'
import InfoLivraison from './InfoLivraison'
import { useHistory } from 'react-router-dom';

export default function Index() {
  const [operation, setoperation] = useState({
    info_enlevement:{},
    info_livraison : {},
    info_colis : {}
  }) ;

  const [AddOperation , {loading,data}] =useMutation(ADD_OPERATION) 

  const history = useHistory()
  
  useEffect(() => {
    if (data?.AddOperation) {
      if (data.AddOperation._id) {
        notify('Votre Commande a eté enregistrer',1)
        history.push('/historique')
      }else{
        notify('Erreur Serveur')
      }
    }
    // eslint-disable-next-line
  }, [data])
  if (loading) return <div style={{textAlign:"center"}}>Connexion...<DisappearedLoading style={{position:"inherit !important",margin:'auto'}}  /></div>;
    return (
        <>
          <div className="col-12">
          <form onSubmit={(e)=>{e.preventDefault();AddOperation({variables:{data:operation}})}} >

            {/* Enlevemment   */}
                <InfoEnlevement operation={operation} setoperation={setoperation} />
            {/* Livraison   */}
                <InfoLivraison  operation={operation}  setoperation={setoperation} />
            {/* Colis   */}
                <InfoColis operation={operation} setoperation={setoperation}/>

        </form>
      </div>
       
        </>
    )
}
