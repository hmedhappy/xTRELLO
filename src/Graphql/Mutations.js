import { gql } from '@apollo/client';

export const REGISTER = gql`
mutation Register($data : RegisterVars) {
 Register(data: $data){
 _id
 username
 password
 date_naissance
}
}
`


export const ADD_OPERATION = gql`
mutation addTask($data : TaskVars) {
    addTask(data: $data){
 _id
}
}
`