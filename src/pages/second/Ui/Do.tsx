import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import List from "../../../shades/UI/List";
import Text2 from "../../../shades/UI/Text2";
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
        {services.map((service) => (
          <div key={service.id} style={{ display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap', margin: "40px"}}>
            <Text>{service.name}</Text>
            <div  style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' }}>
            <Text2>{service.price} ₽</Text2></div>
          </div>
        ))}
    </div>
  );
}

export default UslugiPage;