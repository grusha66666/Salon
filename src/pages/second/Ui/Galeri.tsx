import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import Text2 from "../../../shades/UI/Text2";
import Photo from "../../../shades/UI/Photo";
// import css from "../../second/styles/Galeri.module.css"
import List from "../../../shades/UI/List";
import css from "../../../shades/styles/Photo.module.css";
import Photo3 from "../../../shades/UI/Photo3";
import styles from "../../../shades/styles/Reviews.module.css";
interface Product {
    id: string;
    name: string;
    price: number;
    photo_url: string;
}

function GaleriPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('created_at', { ascending: true });

            if (error) {
                console.error('Ошибка при загрузке товаров:', error);
            } else {
                setProducts(data || []);
            }
            setLoading(false);
        }

        fetchProducts();
    }, []);

    if (loading) return <div>Загрузка товаров из базы...</div>;

    return (
        <div>
        <Text size={25}>Галерея товаров</Text>
        {products.length === 0 && <Text>Товары не найдены</Text>}
        <div className={styles.reviews}>
            {products.map((product) => (
                <List key={product.id}>
                        <Photo3 src={product.photo_url} />
                    <Text><strong>{product.name}</strong></Text>
                    <Text size={16}>{product.price} ₽</Text>
                </List>
            ))}
        </div>
        </div>
    );
}

export default GaleriPage;