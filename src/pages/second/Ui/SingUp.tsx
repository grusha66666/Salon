import { useState } from 'react';
import { supabase } from '../../../utils/supabase'; 
import Text from '../../../shades/UI/Text';
import List from '../../../shades/UI/List';
import Input from '../../../shades/UI/Input';
import Button from '../../../shades/UI/Button';

function SingUpPage({ SingUpPageActionDown }: any) {
    const [fullName, setFullName] = useState(''); // Имя клиента
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

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
                    .from('Profiles')
                    .insert([{ 
                        id: data.user.id, 
                        email: email, 
                        full_name: fullName 
                    }]);
                
                if (profileError) throw profileError;
            }

            alert('Регистрация успешна! Теперь вы можете войти.');
            SingUpPageActionDown?.(); 
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Text>Регистрация</Text>
            <List>
                <p>Ваше Имя</p>
                <Input placholder="Михаил" value={fullName} changeAction={(v) => setFullName(v)} />
                
                <p>Введите Email</p>
                <Input placholder="example@mail.com" value={email} changeAction={(v) => setEmail(v)} />
                
                <p>Введите пароль</p>
                <Input type="password" placholder="......" value={password} changeAction={(v) => setPassword(v)} />

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button clickAction={handleSignUp}>{loading ? 'Загрузка...' : 'Зарегистрироваться'}</Button>
                <Button clickAction={SingUpPageActionDown}>Уже есть аккаунт? Войдите</Button>
            </List>
        </div>
    );
}

export default SingUpPage;