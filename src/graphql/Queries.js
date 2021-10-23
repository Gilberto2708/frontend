import { gql } from '@apollo/client';

export const GET_USERS = gql`
query getPersonas {
  getPersonas {
    nombre
    segundo_nombre
    apellido_paterno
    apellido_paterno
  }
}

`;
