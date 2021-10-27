
import Nombre from './components/Nombre'
import FechaNacimiento from './components/FechaNacimiento';
import DatosContacto from './components/DatosContacto'
import img from './assets/img/avatar3.png'
import { MdAccessTime } from 'react-icons/md';
import { FaNotesMedical } from 'react-icons/fa';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./graphql/Mutation";

function App() {


  const [createPersona, error ] = useMutation(CREATE_USER);



  const [user, setUser] = useState({
    nombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dia: "",
    mes: "",
    año: "",
    correo: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user);
    if (validarFormulario()) {
      try {
         createPersona({
          variables: {
            nombre: user.nombre,
            segundoNombre: user.segundoNombre,
            apellidoPaterno: user.apellidoPaterno,
            apellidoMaterno: user.apellidoMaterno,
            fechaNacimiento: user.dia + "/" + user.mes + "/" + user.año,
            email: user.correo,
            telefono: user.telefono,
          },
        });
   
        toast.info("Guardado con Éxito...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error_) {
        toast.error(error_.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      setUser({
        nombre: "",
        segundoNombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        dia: "",
        mes: "",
        año: "",
        correo: "",
        telefono: "",
      });
    }
  };

  const validarFormulario = () => {
    if (user.nombre === "") {
      toast.error("El campo nombre es obligatorio...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // nombreFocus();
      return false;
    }
    if (user.apellidoPaterno === "") {
      toast.error("El campo apellido paterno es obligatorio...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (user.apellidoMaterno === "") {
      toast.error("El campo apellido materno es obligatorio...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (user.dia === "") {
      toast.error("El campo dia es obligatorio...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (user.mes === "") {
      toast.error("El campo mes es obligatorio...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (user.año === "") {
      toast.error("El campo año es obligatorio...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (user.correo === "") {
      toast.error("El campo correo es obligatorio...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (user.telefono === "") {
      toast.error("El campo telefono es obligatorio...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    return true;
  };

  return (


    <div className="container">
      <ToastContainer></ToastContainer>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Test-Ali</div>
            <div className="card-body">
              <div className="row">
                <div
                  className="col-md-6 rounded mb-2"
                  style={{ background: "#F074F4" }}
                >
                  <div className="row">
                    <div className="col-md-9">
                      <input
                        type="text"
                        placeholder="Titulo del formulario"
                        className="form-control mt-5 mb-3"
                        name="nombre"
                      />
                      <span>
                        <MdAccessTime /> En menos de 5 minutos
                        <br />
                        <div className="px-4">
                          <p className="my-0">
                            Fecha de nacimiento: {user.dia}/{user.mes}/
                            {user.año}
                          </p>
                          <p className="my-0">Email: {user.correo}</p>
                          <p className="my-0">Telefono: {user.telefono}</p>
                          <p className="my-0">
                            Nombre: {user.nombre} {user.segundoNombre}{" "}
                            {user.apellidoPaterno} {user.apellidoMaterno}
                          </p>
                        </div>
                      </span>
                    </div>
                    <div className="col-md-3 text-center mt-5">
                      <FaNotesMedical color="black" fontSize="3.5em" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 my-1">
                  <Nombre img={img} user={user} setUser={setUser} />
                </div>
                <div className="col-md-6 my-1">
                  <FechaNacimiento img={img} user={user} setUser={setUser} />
                </div>
                <div className="col-md-6 my-1">
                  <DatosContacto img={img} user={user} setUser={setUser} handleSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
