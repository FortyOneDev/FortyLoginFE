import { useNavigate } from 'react-router-dom';
import './ForgotPassword.scss';

export const ForgotPasswordScreen = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="wrapper">
            <h1 className='text-center' id='title'>Recupero de Contraseña</h1>
            <br />
            <p className='text-center'>Introduzca su dirección de correo electrónico.</p>
            <form  onSubmit={handleLogin}>
                <div className="input-box">
                    <input 
                        id="Email" 
                        type="email" 
                        name="Email" 
                        placeholder="Email" 
                        required 
                        data-msg="Por favor ingrese su contraseña actual" 
                        className="input-material" 
                    />
                    <i className='bx bxs-envelope'></i>
                </div>
                <div >
                    <button 
                        type="submit"
                        id='btnLogin' 
                        className="btn btn-block btn-success rounded mb-5"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPasswordScreen;
