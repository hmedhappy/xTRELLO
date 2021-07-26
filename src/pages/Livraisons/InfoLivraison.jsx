import React from 'react'

export default function InfoLivraison({operation,setoperation}) {
    const handleChange = (value,name) => {
        setoperation(old => {
            let oldColis = old.info_livraison ;
            oldColis = {...oldColis,[name]:value};
            return Object.assign({},{...old,info_livraison :oldColis})
        })
    }
    return (
        <>
            <div className="box" style={{margin:"15px"}}>
          <div className="box-header" style={{color:"black"}}>
            Adresse Livraison
          </div>
          <div>
            <p><b>&emsp;   Selectioner adresse de livraison deja enregistré</b></p>
            <select class="form-control">
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
          <p><b>&emsp;   ou Ajouter nouvelle adresse de livraison</b></p>
  <div className="mb-3 form-row" >
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nom/prénom</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Nom Prenom" value={operation['info_livraison'].fullname} name="fullname" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Numero de Telephone</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Numero de Telephone" value={operation['info_livraison'].num_tel} name="num_tel" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
  </div>

  <div className="mb-3 form-row" >
    <div class="form-group col-md-4">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Pays</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Pays" value={operation['info_livraison'].pays} name="pays" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Gouvernoratt</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Gouvernorat" value={operation['info_livraison'].gouvernorat} name="gouvernorat" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Ville</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Ville" value={operation['info_livraison'].ville} name="ville" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
  </div>

  <div className="mb-3 form-row" >
    <div class="form-group col-md-4">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Cité</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Cite" value={operation['info_livraison'].cite} name="cite" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4"><span style={{color:"orange"}}>*</span> Code Postal</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Code postal" value={operation['info_livraison'].code_postal} name="code_postal" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
  </div>

  <div className="mb-3 form-row" >
    <div class="form-group col-md-6">
      <label for="inputEmail4"><span style={{color:"orange"}}>*</span> Adresse</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Adresse Livraison" value={operation['info_livraison'].adresse} name="adresse" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Complément adresse</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Complement adresse" value={operation['info_livraison'].complement_adresse} name="complement_adresse" onChange={({target:{value,name}})=>{handleChange(value,name)}}/>
    </div>
  </div>
  <div className="mb-3 form-row" >
  <div class="form-group col-md-6">

  <label for="inputEmail4"><span style={{color:"red"}}>!</span> Enregitrer l'adresse ?</label>
  <select class="form-control">
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
