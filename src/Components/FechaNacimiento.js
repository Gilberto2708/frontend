import React, { Fragment } from 'react';

const FechaNacimiento = ({img, user, setUser}) =>{
const handleChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }

  const fecha_nacimiento = user.dia + '/' + user.mes + '/' + user.año ;

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
                 <h3>¿Cuál es tu fecha de nacimiento?</h3>
                 <div className="row">
                   <div className="col-md-12 mb-1">
                     <input
                       type="number"
                       placeholder="Dia"
                       className="form-control"
                       name="dia"
                       onChange={handleChange}
                       value={user.dia}
                     />
                   </div>
                   <div className="col-md-12 my-1">
                     <input
                       type="number"
                       placeholder="Mes"
                       className="form-control"
                       name="mes"
                       onChange={handleChange}
                       value={user.mes}
                     />
                   </div>
                   <div className="col-md-12 my-1">
                     <input
                       type="number"
                       placeholder="Año"
                       className="form-control"
                       name="año"
                       onChange={handleChange}
                       value={user.año}
                     />
                   </div>
                 </div>
               </div>
               <div
                 className="col-md-12 text-center mt-2"
                 style={{ background: "#F074F4" }}
               >
                 <p className="text-wrap mt-1 my-1" style={{ color: "#fff" }}>
                   {user.dia !== "" ? fecha_nacimiento : ""}
                 </p>
               </div>
             </div>
           </div>
         </div>
       </form>
     </Fragment>
   );
}
 
export default FechaNacimiento;