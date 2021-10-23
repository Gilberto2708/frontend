import React, { Fragment } from 'react';


const DatosContacto = ({img, user, setUser, handleSubmit}) =>{

const handleChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img className="rounded-circle" src={img} alt="" />
              </div>
              <div className="col-md-8 mt-3">
                <h3>Datos de contacto</h3>
                <div className="row">
                  <div className="col-md-12 mb-1">
                    <input
                      type="text"
                      placeholder="Correo electrónico"
                      className="form-control mt-3"
                      name="correo"
                      onChange={handleChange}
                      value={user.correo}
                    />
                  </div>
                  <div className="col-md-12 my-1 mb-3">
                    <input
                      type="text"
                      placeholder="Teléfono celular"
                      className="form-control"
                      name="telefono"
                      onChange={handleChange}
                      value={user.telefono}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5" style={{ background: "#F074F4" }}>
                <p className="text-wrap mt-1 my-1" style={{ color: "#fff" }}>
                  {user.correo !== "" ? "Email: " + user.correo : ""}
                </p>
                <p className="text-wrap mt-1 my-1" style={{ color: "#fff" }}>
                  {user.telefono !== "" ? "Tel: " + user.telefono : ""}
                </p>
              </div>
              <div className="mt-3 px-0">
                <input
                  type="submit"
                  value="Enviar"
                  className="btn btn-default btn-block"
                  style={{
                    width: "100%",
                    background: "#EF07F6",
                    color: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
  
}
 
export default DatosContacto;