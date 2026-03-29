import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import List from "../../../shades/UI/List";
import Input from "../../../shades/UI/Input";
import Select from "../../../shades/UI/Select";
import Button from "../../../shades/UI/Button";


interface IZapisPageProps {
    ZapisPageActionBack?: () => void;
}

function ZapisPage({ZapisPageActionBack}:IZapisPageProps ){

    
    const [masters, setMasters] = useState<any[]>([]);
    const [services, setServices] = useState<any[]>([]);
    const [userProfile, setUserProfile] = useState<{ full_name: string, email: string } | null>(null);

    // Данные формы
    const [selectedMaster, setSelectedMaster] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            // 1. Берем текущего юзера
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                // 2. Достаем имя и почту из профиля
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('full_name, email')
                    .eq('id', user.id)
                    .single();
                setUserProfile(profile);
            }

            // 3. Грузим мастеров
            const { data: mData } = await supabase.from('masters').select('id, full_name');
            setMasters(mData || []);

            // 4. Грузим услуги
            const { data: sData } = await supabase.from('services').select('id, name, price');
            setServices(sData || []);
        };

        fetchData();
    }, []);

    const handleBooking = async () => {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user || !selectedMaster || !selectedService || !time) {
            alert("Заполните все поля, пожалуйста!");
            return;
        }

        const { error } = await supabase.from('appointments').insert([
            {
                user_id: user.id,
                master_id: selectedMaster,
                service_id: selectedService,
                appointment_time: time
            }
        ]);

        if (error) {
            alert("Ошибка: " + error.message);
        } else {
            alert("Вы успешно записаны!");
            // Сброс поля времени после успеха
            setTime("");
        }
    };

    // Подготовка данных для твоего компонента Select
    const mastersOptions = [
        { text: "Выберите мастера", value: "" },
        ...masters.map(m => ({ text: m.full_name, value: m.id }))
    ];

    const servicesOptions = [
        { text: "Выберите услугу", value: "" },
        ...services.map(s => ({ text: `${s.name} (${s.price} ₽)`, value: s.id }))
    ];

    return (
        <div>
            <Text size={25}>Запись на прием</Text>
            <List>
                <div style={{ margin: "10px 0", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                    <p><strong>Клиент:</strong> {userProfile?.full_name || "Загрузка..."}</p>
                    <p><strong>Email:</strong> {userProfile?.email || "..."}</p>
                </div>

                <Text>Выберите мастера:</Text>
                <Select
                    Arroptios={mastersOptions}
                    // Меняем onChange на changeAction, чтобы компонент "услышал" функцию
                    changeAction={(val: string) => setSelectedMaster(val)}
                />

                <Text>Выберите услугу:</Text>
                <Select
                    Arroptios={servicesOptions}
                    // Здесь делаем то же самое
                    changeAction={(val: string) => setSelectedService(val)}
                />

                <p>Желаемое время:</p>
                <Input
                    placholder="Например, 14:30"
                    value={time}
                    changeAction={(v: string) => setTime(v)}
                />

                <Button clickAction={handleBooking}>Подтвердить запись</Button>
                <Button clickAction={ZapisPageActionBack}>Посмотреть мои записи</Button>
            </List>
        </div>
    );
}

export default ZapisPage;