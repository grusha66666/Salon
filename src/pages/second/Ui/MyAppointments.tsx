import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import styles from "../../second/styles/Myappointments.module.css"; // Импорт стилей

function MyAppointments() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      // Получаем текущего пользователя (исправил логику user_id)
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from("appointments")
          .select(
            `
                        id,
                        appointment_time,
                        masters (full_name),
                        services (name, price)
                    `,
          )
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Ошибка:", error);
        } else {
          setAppointments(data || []);
        }
      }
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  if (loading)
    return (
      <div className={styles.noData}>
        <Text>Загрузка ваших записей...</Text>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text size={32}>Мои записи</Text>
      </div>

      {appointments.length > 0 ? (
        <div className={styles.appointmentsList}>
          {appointments.map((apt) => (
            <div key={apt.id} className={styles.appointmentCard}>
              <div className={styles.item}>
                <span className={styles.label}>Процедура:</span>
                <span className={styles.value}>{apt.services?.name}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>Мастер:</span>
                <span className={styles.value}>{apt.masters?.full_name}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>Время:</span>
                <span className={styles.value}>{apt.appointment_time}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>Цена:</span>
                <span className={styles.value}>{apt.services?.price} ₽</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noData}>
          <Text>У вас пока нет активных записей.</Text>
        </div>
      )}
    </div>
  );
}

export default MyAppointments;
