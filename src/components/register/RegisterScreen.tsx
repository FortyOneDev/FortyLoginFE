import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

interface RegisterForm {
    user: string;
    email: string;
    confirmEmail: string;
    password: string;
}

export const RegisterScreen: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RegisterForm>({
        user: '',
        email: '',
        confirmEmail: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { user, email, confirmEmail, password } = formData;

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email !== confirmEmail) {
            setError('Los emails no coinciden.');
            return;
        }
        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        setLoading(true);
        setError('');

        try {
            // logica para enviar los datos al servidor
            // await registerUser(formData);

            const lastPath = localStorage.getItem('lastPath') || '/';
            navigate(lastPath, { replace: true });
        } catch (e) {
            setError('Error en el registro. Por favor, inténtelo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="wrapper">
                <form action="" onSubmit={handleSubmit}>
                    <h1>Registro</h1>
                    <div className="input-box">
                        <input
                            id="user"
                            type="text"
                            name="user"
                            placeholder="Usuario"
                            required
                            data-msg="Por favor ingrese su Usuario"
                            className="input-material"
                            value={user}
                            onChange={onInputChange}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            data-msg="Por favor ingrese su Email"
                            className="input-material"
                            value={email}
                            onChange={onInputChange}
                        />
                        <i className='bx bxs-envelope'></i>
                    </div>
                    <div className="input-box">
                        <input
                            id="confirm-email"
                            type="email"
                            name="confirmEmail"
                            placeholder="Confirme su Email"
                            required
                            data-msg="Por favor ingrese su Email"
                            className="input-material"
                            value={confirmEmail}
                            onChange={onInputChange}
                        />
                        <i className='bx bxs-envelope'></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            required
                            minLength={6}
                            value={password}
                            onChange={onInputChange}
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button
                        type="submit"
                        className="btn"
                        disabled={loading}
                    >
                        {loading ? 'Cargando...' : 'Registrarse'}
                    </button>
                    <div className="register-link"></div>
                </form>
            </div>
        </div>
    );
};
