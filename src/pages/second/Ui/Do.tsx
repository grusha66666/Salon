import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import List from "../../../shades/UI/List";
interface Service {
  id: string;
  name: string;
  price: number;
}
function UslugiPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('name', { ascending: true });

      if (error) {
        console.error('Ошибка при загрузке услуг:', error);
      } else {
        setServices(data || []);
      }
      setLoading(false);
    }
    fetchServices();
  }, []);
  if (loading) return <div>Загрузка...</div>;
  return (
    <div>
      <Text>Наши Услуги</Text>
      <List>
        {services.map((service) => (
          <List key={service.id}>
            <Text>{service.name}</Text>
            <Text>{service.price} ₽</Text>
          </List>
        ))}
      </List>
    </div>
  );
}

export default UslugiPage;