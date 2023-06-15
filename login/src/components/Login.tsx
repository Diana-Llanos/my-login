

export const Login = () => {
    return (
    <div className="container">
      <div className="child"><h1><center>INICIO DE SESION</center></h1>
       <div className="login">
        <div className="form">
            <form className="register">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <button onClick={()=> alert('Datos guardados con exito')}>login</button>


            </form>
            
        </div>
       
         

       
       
      
      </div>
    </div>
    </div>

    )
}