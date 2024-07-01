import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ForgotPassword.scss';

export const ForgotPasswordScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('global');

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="wrapper">
            <h1 className='text-center' id='title'>{t('forgotPassword.Title')}</h1>
            <br />
            <p className='text-center'>{t('forgotPassword.Instruction')}</p>
            <form onSubmit={handleLogin}>
                <div className="input-box">
                    <input 
                        id="Email" 
                        type="email" 
                        name="Email" 
                        placeholder={t('forgotPassword.EmailPlaceholder')} 
                        required 
                        data-msg={t('forgotPassword.EmailDataMsg')} 
                        className="input-material" 
                    />
                    <i className='bx bxs-envelope'></i>
                </div>
                <div>
                    <button 
                        type="submit"
                        id='btnLogin' 
                        className="btn btn-block btn-success rounded mb-5"
                    >
                        {t('forgotPassword.SubmitButton')}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPasswordScreen;
