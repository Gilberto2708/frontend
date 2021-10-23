import React, { Fragment } from 'react';


const Nombre = ({img, user, setUser}) =>{

    const handleChange = (e) =>{
            setUser({...user, [e.target.name]:e.target.value})
    }

   return (
     <Fragment>      
            <form>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img className="rounded-circle" src={img} alt="" />
                    </div>
                    <div className="col-md-8">             
                      <h3>¿Cual es tu nombre?</h3>
                      <div className="row">
                        <div className="col-md-12 mb-1">
                          <input
                            type="text"
                            placeholder="Nombre"
                            className="form-control"
                            name="nombre"
                            onChange={handleChange}
                            value={user.nombre}
                          />
                        </div>
                        <div className="col-md-12 my-1">
                          <input
                            type="text"
                            placeholder="Segundo Nombre"
                            className="form-control"
                            name="segundoNombre"
                            onChange={handleChange}
                            value={user.segundoNombre}
                          />
                        </div>
                        <div className="col-md-12 my-1">
                          <input
                            type="text"
                            placeholder="Apellido Paterno"
                            className="form-control"
                            name="apellidoPaterno"
                            value={user.apellidoPaterno} 
                            onChange={handleChange} 
                          />
                        </div>
                        <div className="col-md-12 mt-1">
                          <input
                            type="text"
                            placeholder="Apellido Materno"
                            className="form-control"
                            name="apellidoMaterno"
                            value={user.apellidoMaterno} 
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center mt-2 " style={{background:'#F074F4'}}>
                        { <p className="text-wrap mt-1 my-1" style={{color:'#fff'}}>{user.nombre} {user.segundoNombre}  {user.apellidoPaterno} {user.apellidoMaterno}</p> }
                    </div>
                  </div>
                </div>
              </div>
       </form> 
     </Fragment>
   );
}
 
export default Nombre;