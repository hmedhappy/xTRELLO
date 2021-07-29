import React  from 'react'

export default function InfoEnlevement({operation,setoperation}) {

    const handleChange = (value,name) => {
        setoperation(old => {
            let oldColis = old.info_enlevement ;
            oldColis = {...oldColis,[name]:value};
            return Object.assign({},{...old,info_enlevement :oldColis})
        })
    }
    return (
        <>
            <div className="box" style={{margin:"15px"}}>
          <div className="box-header" style={{color:"black"}}>
            Adresse Enlevemment
          </div>
          <div>
            <p><b>&emsp;   Selectioner adresse d'enlevement deja enregistré</b></p>
            <select className="form-control">
              <option>Tunis</option>
              <option>Ariana</option>
              <option>Dabya</option>
              <option>Tunis</option>
            </select>
          </div>
          <br/>
          <br/>
      <hr/>
          <div className="box-body scrollbar-hidden">
          <p><b>&emsp;   ou Ajouter nouvelle adresse d'enlevement</b></p>
  <div className="mb-3 form-row" >
    <div className="form-group col-md-6">
      <label for="inputEmail4">Expediteur</label>
      <input required type="text" className="form-control" id="inputEmail4" placeholder="Expediteur" value={operation['info_enlevement'].expedieur} name="expedieur" onChange={({target:{value,name}})=>{handleChange(value,name)}} />
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Numero de Telephone</label>
      <input required type="text" className="form-control" id="inputPassword4" placeholder="Num_tel"  value={operation['info_enlevement'].num_tel} name="num_tel" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
  </div>

  <div className="mb-3 form-row" >
    <div className="form-group col-md-4">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Pays</label>
      <input required type="text" className="form-control" id="inputEmail4" placeholder="Pays" value={operation['info_enlevement'].pays} name="pays" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Gouvernorat</label>
      <input required type="text" className="form-control" id="inputPassword4" placeholder="Gouvernorat" value={operation['info_enlevement'].gouvernorat} name="gouvernorat" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Ville</label>
      <input required type="text" className="form-control" id="inputPassword4" placeholder="Ville" value={operation['info_enlevement'].ville} name="ville" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
  </div>

  <div className="mb-3 form-row" >
    <div className="form-group col-md-4">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Cité</label>
      <input required type="text" className="form-control" id="inputEmail4" placeholder="Cite" value={operation['info_enlevement'].cite} name="cite" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Code Postal</label>
      <input required type="text" className="form-control" id="inputPassword4" placeholder="Code postal" value={operation['info_enlevement'].code_postal} name="code_postal" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
  </div>

  <div className="mb-3 form-row" >
    <div className="form-group col-md-6">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Adresse</label>
      <input required type="text" className="form-control" id="inputEmail4" placeholder="Adresse" value={operation['info_enlevement'].adresse} name="adresse" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Complément adresse</label>
      <input required type="text" className="form-control" id="inputPassword4" placeholder="Complement adresse" value={operation['info_enlevement'].complement_adresse} name="complement_adresse" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
  </div>
  <div className="mb-3 form-row" >
  <div className="form-group col-md-6">

  <label for="inputEmail4"><span style={{color:"red"}}>!</span> Enregitrer l'adresse ?</label>
  <select required className="form-control">
              <option>Ne pas enregistrer</option>
              <option>Enregistrer l'adresse</option>
</select>
</div>
</div>
  




            </div>
            
        </div>

          
        </>
    )
}
