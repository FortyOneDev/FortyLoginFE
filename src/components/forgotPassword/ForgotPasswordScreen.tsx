import { useNavigate } from 'react-router-dom';

export const ForgotPasswordScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className='card'>
      
      <p className='text-center' id='title'>Recupero de Contraseña</p>
      <p className='text-center'>Introduzca su dirección de correo electrónico.</p>
      <br/>
      <form className="form-validate">

        <div className="text-center">
          <input id="Email" type="Email" name="Email" placeholder="Email" required data-msg="Por favor ingrese su contraseña actual" className="input-material" />
        </div>

        <div className="text-center mt-0">
          <button onClick={ handleLogin } id='btnLogin' className="btn btn-block btn-success rounded mb-5">Enviar</button>
        </div>

      </form>

    </div>
  )
}
