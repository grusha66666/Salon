import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import List from "../../../shades/UI/List";

function MyAppointments() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        // Запрос со сложной выборкой (JOIN)
        const { data, error } = await supabase
          .from('appointments')
          .select(`
            id,
            appointment_time,
            masters (full_name),
            services (name, price)
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          console.error("Ошибка при получении записей:", error);
        } else {
          setAppointments(data || []);
        }
      }
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  if (loading) return <Text>Загрузка ваших записей...</Text>;

  return (
    <div>
      <Text size={25}>Мои записи</Text>
      <List>
        {appointments.length > 0 ? (
          appointments.map((apt) => (
            <div key={apt.id} style={{ 
              border: "1px solid #ccc", 
              padding: "15px", 
              marginBottom: "10px", 
              borderRadius: "8px" 
            }}>
              <Text><strong>Процедура:</strong> {apt.services?.name}</Text>
              <Text><strong>Мастер:</strong> {apt.masters?.full_name}</Text>
              <Text><strong>Время:</strong> {apt.appointment_time}</Text>
              <Text><strong>Цена:</strong> {apt.services?.price} ₽</Text>
            </div>
          ))
        ) : (
          <Text>У вас пока нет активных записей.</Text>
        )}
      </List>
    </div>
  );
}

export default MyAppointments;