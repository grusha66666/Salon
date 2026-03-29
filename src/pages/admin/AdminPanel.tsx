import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import Text from "../../shades/UI/Text";
import Button from "../../shades/UI/Button";
import Input from "../../shades/UI/Input";

function AdminPanel({ onBack }: { onBack: () => void }) {
    const [tab, setTab] = useState<'masters' | 'services' | 'products' | 'appointments' | 'reviews'>('masters');
    const [data, setData] = useState<any[]>([]);

    // Состояния для формы
    const [editId, setEditId] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [extra, setExtra] = useState("");
    const [description, setDescription] = useState("");

    // 1. Загрузка данных с учетом связей (Foreign Keys)
    const fetchData = async () => {
        let query;

        if (tab === 'appointments') {
            // Запрос с учетом твоих колонок из скриншота
            query = supabase.from('appointments').select(`
            id,
            appointment_time,
            profiles:user_id (full_name),
            masters:master_id (full_name),
            services:service_id (name)
        `);
        } else {
            query = supabase.from(tab).select('*');
        }

        const { data: res, error } = await query;

        if (error) {
            console.error("Ошибка запроса:", error);
            // План Б: грузим без связей, если база ругается на ключи
            const { data: fallback } = await supabase.from(tab).select('*');
            setData(fallback || []);
        } else {
            // Проверка в консоли: нажми F12 в браузере и посмотри, что пришло
            console.log("Пришло из базы:", res);
            setData(res || []);
        }
    };

    useEffect(() => {
        setEditId(null); setName(""); setPrice(""); setExtra(""); setDescription("");
        fetchData();
    }, [tab]);

    // 2. Редактирование
    const startEdit = (item: any) => {
        setEditId(item.id);
        if (tab === 'masters') {
            setName(item.full_name || "");
            setExtra(item.photo_url || "");
            setDescription(item.specialty || "");
        } else {
            setName(item.name || "");
            setPrice(item.price?.toString() || "");
            setExtra(item.photo_url || "");
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 3. Сохранение данных
    const handleSave = async () => {
        if (!name) return alert("Введите название или имя!");

        const payload: any = {};
        if (tab === 'masters') {
            payload.full_name = name;
            payload.photo_url = extra;
            payload.specialty = description;
        } else {
            payload.name = name;
            payload.price = Number(price);
            payload.photo_url = extra;
        }

        const { error } = editId
            ? await supabase.from(tab).update(payload).eq('id', editId)
            : await supabase.from(tab).insert([payload]);

        if (!error) {
            setEditId(null); setName(""); setPrice(""); setExtra(""); setDescription("");
            fetchData();
        } else {
            alert("Ошибка сохранения: " + error.message);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Удалить эту запись?")) {
            await supabase.from(tab).delete().eq('id', id);
            fetchData();
        }
    };

    return (
        <div style={{ padding: "20px", background: "white", minHeight: "100vh" }}>
            <Button clickAction={onBack}>← На сайт</Button>
            <Text size={30}>Панель управления</Text>

            <div style={{ display: "flex", gap: "10px", margin: "20px 0", flexWrap: "wrap" }}>
                <Button clickAction={() => setTab('masters')}>Мастера</Button>
                <Button clickAction={() => setTab('services')}>Услуги</Button>
                <Button clickAction={() => setTab('products')}>Товары</Button>
                <Button clickAction={() => setTab('appointments')}>Записи</Button>
                <Button clickAction={() => setTab('reviews')}>Отзывы</Button>
            </div>

            {/* Форма добавления/редактирования (скрыта для записей и отзывов) */}
            {tab !== 'appointments' && tab !== 'reviews' && (
                <div style={{ border: "2px solid #eee", padding: "15px", marginBottom: "20px", borderRadius: "8px" }}>
                    <Text size={20}>{editId ? "📝 Редактирование" : "➕ Добавить"}</Text>
                    <Input placholder="Имя / Название" value={name} changeAction={setName} />
                    {(tab === 'services' || tab === 'products') && <Input placholder="Цена" value={price} changeAction={setPrice} />}
                    <Input placholder="URL фото" value={extra} changeAction={setExtra} />
                    {tab === 'masters' && <Input placholder="Описание / Специальность" value={description} changeAction={setDescription} />}
                    <div style={{ marginTop: "10px" }}>
                        <Button clickAction={handleSave}>{editId ? "Сохранить" : "Добавить"}</Button>
                    </div>
                </div>
            )}

            {/* Список данных */}
            <div>
                {data.map(item => (
                    <div key={item.id} style={{ padding: "15px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            {tab === 'appointments' ? (
                                <>
                                    <Text><strong>Клиент:</strong> {item.profiles?.full_name || "Не указан"}</Text>
                                    <Text size={14}><strong>Услуга:</strong> {item.services?.name || "—"}</Text>
                                    <Text size={14}><strong>Мастер:</strong> {item.masters?.full_name || "—"}</Text>
                                    <Text size={14}><strong>Время:</strong> {item.appointment_time || "—"}</Text>
                                </>
                            ) : (
                                <>
                                    <Text><strong>{item.full_name || item.name || item.comment}</strong></Text>
                                    {item.specialty && <Text size={14}>{item.specialty}</Text>}
                                    {item.price && <Text size={14}>{item.price} ₽</Text>}
                                </>
                            )}
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            {tab !== 'appointments' && tab !== 'reviews' && <Button clickAction={() => startEdit(item)}>Ред.</Button>}
                            <Button clickAction={() => handleDelete(item.id)}>Удалить</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPanel;