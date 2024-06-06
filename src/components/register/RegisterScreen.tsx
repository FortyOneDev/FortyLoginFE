import React from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className='card'>
      
      <p className='text-center' id='title'>Registrarte</p>      
      <br/>
      <form className="form-validate">

        <div className="text-center">
          <input id="UserName" type="Text" name="UserName" placeholder="Usuario" required data-msg="Por favor ingrese su Email" className="input-material" />
        </div>

        <div className="text-center">
          <input id="Email" type="email" name="Email" placeholder="Email" required data-msg="Por favor ingrese su Email" className="input-material" />
        </div>

        <div className="text-center">
          <input id="Password" type="Password" name="Password" placeholder="Contraseña" required data-msg="Por favor ingrese su contraseña" className="input-material" />
        </div>

        <div className="text-center">
          <input id="ConfirmPassword" type="Password" name="ConfirmPassword" placeholder="Confirmar contraseña" required data-msg="Por favor ingrese su contraseña" className="input-material" />
        </div>

        <div className="text-center mt-0">
          <button onClick={ handleLogin } id='btnLogin' className="btn btn-block btn-success rounded mb-5">Registrarme ahora</button>
        </div>

      </form>

    </div>
  )
}
