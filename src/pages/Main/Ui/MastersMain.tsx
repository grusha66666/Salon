import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import Text2 from "../../../shades/UI/Text2";
import Photo2 from "../../../shades/UI/Photo2";
import List from "../../../shades/UI/List";
import css from "../../../shades/styles/Photo.module.css";

// Описываем, как выглядит мастер
interface Master {
  id: string;
  full_name: string;
  specialty: string;
  photo_url: string;
}

function MastersMainPage() {
  const [masters, setMasters] = useState<Master[]>([]);

  useEffect(() => {
    // Функция для загрузки мастеров из базы
    const fetchMasters = async () => {
      const { data, error } = await supabase
        .from('masters') // используем маленькие буквы, как в базе
        .select('*');
      
      if (error) {
        console.error("Ошибка загрузки мастеров:", error);
      } else if (data) {
        setMasters(data);
      }
    };

    fetchMasters();
  }, []);

  return (
    <>
      <Text2 size={25}>Наши мастера</Text2>
      <div className={css.gallery}>
        {masters.map((master) => (
          <List key={master.id} listStyle="none">
            <Photo2 src={master.photo_url} />
            <Text>{master.full_name}</Text>
            <Text>{master.specialty}</Text>
          </List>
        ))}
      </div>
    </>
  );
}

export default MastersMainPage;