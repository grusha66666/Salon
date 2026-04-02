import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import Select from "../../../shades/UI/Select";
import Button from "../../../shades/UI/Button";
import { useNavigate } from 'react-router-dom';
import css from "../../second/styles/Zapis.module.css";

interface IZapisPageProps {
    ZapisPageActionBack?: () => void;
}

function ZapisPage({ ZapisPageActionBack }: IZapisPageProps) {
    const navigate = useNavigate();
    const [masters, setMasters] = useState<any[]>([]);
    const [services, setServices] = useState<any[]>([]);
    const [userProfile, setUserProfile] = useState<{ full_name: string, email: string } | null>(null);

    const [selectedMaster, setSelectedMaster] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [time, setTime] = useState("");

    const timeSlots = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", 
        "18:00", "18:30", "19:00", "19:30"
    ];

    useEffect(() => {
        const fetchData = async () => {
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('full_name, email')
                    .eq('id', user.id)
                    .single();
                setUserProfile(profile);
            }

            const { data: mData } = await supabase.from('masters').select('id, full_name');
            setMasters(mData || []);

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
            setTime("");
        }
    };

    const mastersOptions = [
        { text: "Выберите мастера", value: "" },
        ...masters.map(m => ({ text: m.full_name, value: m.id }))
    ];

    const servicesOptions = [
        { text: "Выберите услугу", value: "" },
        ...services.map(s => ({ text: `${s.name} (${s.price} ₽)`, value: s.id }))
    ];

    const timeOptions = [
        { text: "Выберите удобное время", value: "" },
        ...timeSlots.map(t => ({ text: t, value: t }))
    ];

    return (
        <div className={css.center}>
            <div className={css.loginCard}>

                <Text size={25}>Запись на процедуру</Text>

                <div className={css.inputGroup}>
                    <p><strong>Клиент:</strong> {userProfile?.full_name || "Загрузка..."}</p>
                    <p><strong>Email:</strong> {userProfile?.email || "..."}</p>
                </div>

                <div className={css.inputGroup}>
                    <Text>Выберите мастера:</Text>
                    <Select
                        Arroptios={mastersOptions}
                        changeAction={(val: string) => setSelectedMaster(val)}
                    />
                </div>

                <div className={css.inputGroup}>
                    <Text>Выберите услугу:</Text>
                    <Select
                        Arroptios={servicesOptions}
                        changeAction={(val: string) => setSelectedService(val)}
                    />
                </div>

                <div className={css.inputGroup}>
                    <Text>Желаемое время:</Text>
                    <Select
                        Arroptios={timeOptions}
                        changeAction={(val: string) => setTime(val)}
                    />
                </div>

                <Button clickAction={handleBooking}>Подтвердить запись</Button>

                <Button clickAction={() => navigate('/appointments')}>
                    Посмотреть мои записи
                </Button>
            </div>
        </div>
    );
}

export default ZapisPage;