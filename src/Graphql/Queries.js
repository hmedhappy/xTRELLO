import {gql} from '@apollo/client'


export const LOGIN = gql`
   query Login($data : LoginVars) {
  Login(data: $data){
    _id
    username
    password
    date_naissance
    
  }
}
`

export const GET_OPERATIONS = gql`
   query{
    getTasks {
    _id
    title
    contenu
    status
    date_creation
    date_viewed
    creator
  }
}
`
