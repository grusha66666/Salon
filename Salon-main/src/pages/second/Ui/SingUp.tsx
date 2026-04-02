import { useState } from 'react';
import { supabase } from '../../../utils/supabase'; 
import Input from '../../../shades/UI/Input';
import css from "../../../shades/styles/Panel.module.css";
import Button from '../../../shades/UI/Button';
import Text from '../../../shades/UI/Text';
import { useNavigate } from 'react-router-dom';

function SingUpPage({}) {
    const [fullName, setFullName] = useState(''); // Имя клиента
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        setError('');
        setLoading(true);

        try {
            // 1. Создаем пользователя в Auth
            const { data, error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) throw authError;

            // 2. Записываем имя в таблицу Profiles
            if (data.user) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert([{ 
                        id: data.user.id, 
                        email: email, 
                        full_name: fullName 
                    }]);
                
                if (profileError) throw profileError;
            }

            alert('Регистрация успешна! Теперь вы можете войти.');
            navigate('/signin');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
         <div className={css.center}>
            <div className={css.loginCard}>
              <Text>Регистрация</Text>
                <p>Ваше Имя</p>
                <Input placholder="Михаил" value={fullName} changeAction={(v) => setFullName(v)} />
                
                <p>Введите Email</p>
                <Input placholder="example@mail.com" value={email} changeAction={(v) => setEmail(v)} />
                
                <p>Введите пароль</p>
                <Input type="password" placholder="......" value={password} changeAction={(v) => setPassword(v)} />

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button clickAction={handleSignUp}>{loading ? 'Загрузка...' : 'Зарегистрироваться'}</Button>
                <Button clickAction={() => navigate('/signin')}>
                    Нет аккаунта? Зарегистрируйтесь
                </Button>
            </div>
        </div>
    );
}

export default SingUpPage;