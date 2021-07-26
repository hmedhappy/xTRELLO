import React from 'react'

export default function InfoColis({operation,setoperation}) {

    const handleChange = (value,name) => {
        setoperation(old => {
            let oldColis = old.info_colis ;
            oldColis = {...oldColis,[name]:value};
            return Object.assign({},{...old,info_colis :oldColis})
        })
    }
    return (
        <>
         <div className="box " style={{margin:"15px"}}>
          <div className="box-header">
          Colis
          </div>
          <div className="box-body  scrollbar-hidden">
 
<div className="mb-3 form-row" >
    <div class="form-group col-md-4">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Type Colis</label>
      <select required  class="form-control" id="inputEmail4" placeholder="Adresse enlevement" value={operation['info_colis'].type_colis} name="type_colis" onChange={({target:{value,name}})=>{handleChange(value,name)}}>
        <option>SSD</option>
        <option>LSD</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Désignation</label>
      <input required type="text" class="form-control" id="inputPassword4" placeholder="Numero de Telephone" value={operation['info_colis'].designation} name="designation" onChange={({target:{value,name}})=>{handleChange(value,name)}} />
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Montant a la rception</label>
      <input required type="number" class="form-control" id="inputPassword4" placeholder="Numero de Telephone"  value={operation['info_colis'].montant_a_reception} name="montant_a_reception" onChange={({target:{value,name}})=>{handleChange(parseInt(value),name)}} />
    </div>
</div>

<div className="mb-3 form-row" >
    <div class="form-group col-md-4">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Reférence</label>
      <select  class="form-control" id="inputEmail4" placeholder="Adresse enlevement" value={operation['info_colis'].reference} name="reference" onChange={({target:{value,name}})=>{handleChange(value,name)}}>
        <option>SSD</option>
        <option>LSD</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Nombre piéces</label>
      <input required type="number" class="form-control" id="inputPassword4" placeholder="Numero de Telephone" value={operation['info_colis'].nbr_piece} name="nbr_piece" onChange={({target:{value,name}})=>{handleChange(parseInt(value),name)}}/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Volume</label>
      <input required type="number" class="form-control" id="inputPassword4" placeholder="Numero de Telephone" value={operation['info_colis'].volume} name="volume" onChange={({target:{value,name}})=>{handleChange(parseInt(value),name)}}/>
    </div>
</div>

<div className="mb-3 form-row" >
    <div class="form-group col-md-4">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Poids</label>
      <input required type="number" class="form-control" id="inputEmail4" placeholder="Adresse enlevement" value={operation['info_colis'].poid} name="poid" onChange={({target:{value,name}})=>{handleChange(parseInt(value),name)}}/>
        
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Echange</label>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" id="flexRadioDefault1" checked={operation['info_colis'].echange} name="echange" onChange={({target:{checked:value,name}})=>{handleChange(value,name)}}/> {operation['info_colis'].echange ?"Oui" : "Non"}
</div>
  
    </div>
    
</div>

  <button type="submit" className="btn btn-primary">Submit</button>



            </div>
            
        </div>
           
        </>
    )
}
