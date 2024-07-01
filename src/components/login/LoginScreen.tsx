import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { checkingAuthentication } from '../../store/auth';
import { AppDispatch } from '../../store';
import { useTranslation } from 'react-i18next';
import './Login.scss';

interface LoginForm {
    email: string;
    password: string;
}

export const LoginScreen: React.FC = () => {
    const { t } = useTranslation(); // Importa useTranslation y obtén la función de traducción t
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginForm>({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const { email, password } = formData;

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                email: rememberedEmail,
            }));
            setRememberMe(true);
        }
    }, []);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.target.checked);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            await dispatch(checkingAuthentication(email, password));
            const lastPath = localStorage.getItem('lastPath') || '/';
            navigate(lastPath, { replace: true });

            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
        } catch (e) {
            setError(t('login.authenticationError')); // Utiliza las traducciones adecuadas aquí
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="wrapper">
                <form action="" onSubmit={handleSubmit}>
                    <h1>{t('login.title')}</h1>
                    <div className="input-box">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder={t('login.emailPlaceholder')} 
                            required
                            data-msg={t('login.emailValidationMessage')} 
                            className="input-material"
                            value={email}
                            onChange={onInputChange}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder={t('login.passwordPlaceholder')} 
                            required
                            minLength={6}
                            value={password}
                            onChange={onInputChange}
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={onCheckboxChange}
                            />
                            {t('login.rememberMe')}
                        </label>
                        <Link to="/forgotpassword">{t('login.forgotPassword')}</Link>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? t('login.loading') : t('login.login')} 
                    </button>
                    <div className="register-link">
                        <p>{t('login.noAccount')} <Link to="/register">{t('login.register')}</Link></p> 
                    </div>
                </form>
            </div>
        </div>
    );
};
