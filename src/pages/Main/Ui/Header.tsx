import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase'; // Проверь путь
import Button from "../../../shades/UI/Button";
import Button2 from '../../../shades/UI/Button2';

interface IMainPageProps {
    MainPageActionBack?: () => void;
    MainPageActionMaster?: () => void;
    MainPageActionDo?: () => void;
    MainPageActionGaleri?: () => void;
    MainPageActionZapis?: () => void;
    MainPageActionProfil?: () => void;
}

function HeaderPage({
    MainPageActionBack,
    MainPageActionMaster,
    MainPageActionDo,
    MainPageActionGaleri,
    MainPageActionZapis,
    MainPageActionProfil
}: IMainPageProps) {
    
    // Теперь храним здесь имя (full_name)
    const [userName, setUserName] = useState<string | null>(null);

    // Вынес логику получения имени в отдельную функцию, чтобы вызывать её при входе
    const fetchUserProfile = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
            // Запрос к твоей новой таблице Profiles
            const { data, error } = await supabase
                .from('profiles')
                .select('full_name')
                .eq('id', user.id)
                .single();

            if (data && !error) {
                setUserName(data.full_name);
            } else {
                // Если имя в Profiles не найдено, подставим почту как запасной вариант
                setUserName(user.email ?? null);
            }
        } else {
            setUserName(null);
        }
    };

    useEffect(() => {
        fetchUserProfile();

        // Следим за состоянием (вход/выход)
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                fetchUserProfile();
            } else {
                setUserName(null);
            }
        });

        return () => authListener.subscription.unsubscribe();
    }, []);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Ошибка при выходе:', error.message);
        } else {
            setUserName(null);
            alert('Вы вышли из аккаунта');
        }
    };

    return (
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button clickAction={MainPageActionBack}>Главная</Button>
            <Button clickAction={MainPageActionMaster}>Cписок мастеров</Button>
            <Button clickAction={MainPageActionDo}>Cписок Услуг</Button>
            <Button clickAction={MainPageActionGaleri}>Галерея товаров</Button>
            <Button clickAction={MainPageActionZapis}>Запись</Button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' }}>
                {userName && (
                    <>
                        {/* Здесь теперь отображается имя клиента */}
                        <span style={{ fontSize: '18px', color: '#333', fontWeight: 'bold' }}>
                            {userName}
                        </span>
                        <Button2 clickAction={handleLogout}>Выйти</Button2>
                    </>
                )}
                <Button2 clickAction={MainPageActionProfil}>👤</Button2>
            </div>
        </div>
    );
}

export default HeaderPage;