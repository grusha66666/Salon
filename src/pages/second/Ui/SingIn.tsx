import { useState } from 'react';
import { supabase } from '../../../utils/supabase'; // Проверь путь к конфигу
import Input from "../../../shades/UI/Input";
import Button2 from '../../../shades/UI/Button2';
import css from "../../../shades/styles/Panel.module.css";
import Text from '../../../shades/UI/Text';
import Button from '../../../shades/UI/Button';
import { useNavigate } from 'react-router-dom';


function SingInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSignIn = async () => {
        setError('');
        setLoading(true);

        if (!email || !password) {
            setError('Введите почту и пароль');
            setLoading(false);
            return;
        }

        try {
            // Вход по Email и Паролю
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (signInError) {
                // Выводим ошибку от Supabase (например, "Invalid login credentials")
                setError(signInError.message);
                console.error(signInError);
            } else {
                console.log('Успешный вход:', data);
                // Переход "вверх" (например, на главную или в профиль)
                navigate('/');
            }
        } catch (err: any) {
            setError('Произошла ошибка при входе. Попробуйте позже.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={css.center}>
            <div className={css.loginCard}>
                <Text>Вход в аккаунт</Text>
                <p>Введите Email</p>
                <Input
                    placholder="example@mail.com"
                    value={email}
                    changeAction={(value) => setEmail(value)}
                />

                <p>Введите пароль</p>
                <Input
                    placholder="........"
                    type="password"
                    value={password}
                    changeAction={(value) => setPassword(value)}
                />

                {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

                <Button clickAction={handleSignIn}>
                    {loading ? 'Входим...' : 'Войти'}
                </Button>

                <Button clickAction={() => navigate('/signup')}>
                    Нет аккаунта? Зарегистрируйтесь
                </Button>
            </div>
        </div>
    );
}

export default SingInPage;