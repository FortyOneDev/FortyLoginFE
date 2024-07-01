import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import './RegisterScreen';
import { useTranslation } from 'react-i18next';

interface RegisterForm {
    user: string;
    email: string;
    confirmEmail: string;
    password: string;
}

export const RegisterScreen: React.FC = () => {
    const { t } = useTranslation();

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
            setError(t('register.emailMismatch'));
            return;
        }
        if (password.length < 6) {
            setError(t('register.passwordLength'));
            return;
        }
        setLoading(true);
        setError('');

        try {
            // Lógica para enviar los datos al servidor
            // await registerUser(formData);

            const lastPath = localStorage.getItem('lastPath') || '/';
            navigate(lastPath, { replace: true });
        } catch (e) {
            setError(t('register.registrationError'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="wrapper">
                <form action="" onSubmit={handleSubmit}>
                    <h1>{t('register.title')}</h1>
                    <div className="input-box">
                        <input
                            id="user"
                            type="text"
                            name="user"
                            placeholder={t('register.userPlaceholder')}
                            required
                            data-msg={t('register.userValidationMessage')}
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
                            placeholder={t('register.emailPlaceholder')}
                            required
                            data-msg={t('register.emailValidationMessage')}
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
                            placeholder={t('register.confirmEmailPlaceholder')}
                            required
                            data-msg={t('register.emailValidationMessage')}
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
                            placeholder={t('register.passwordPlaceholder')}
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
                        {loading ? t('register.loading') : t('register.register')}
                    </button>
                    <div className="register-link"></div>
                </form>
            </div>
        </div>
    );
};
