import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation CreatePersonaMutation($nombre: String!, $segundoNombre: String!, $apellidoPaterno: String!, $apellidoMaterno: String!, $fechaNacimiento: String!, $email: String!, $telefono: String!) {
        createPersona(nombre: $nombre, segundo_nombre: $segundoNombre, apellido_paterno: $apellidoPaterno, apellido_materno: $apellidoMaterno, fecha_nacimiento: $fechaNacimiento, email: $email, telefono: $telefono) {
            nombre
            segundo_nombre
            apellido_materno
        }
    }


`;