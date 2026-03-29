import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import Photo from "../../../shades/UI/Photo";
import List from "../../../shades/UI/List";

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

            {/* Перебираем массив товаров из базы */}
            {products.map((product) => (
                <List listStyle="none" key={product.id}>
                    <Photo src={product.photo_url} />
                    <Text><strong>{product.name}</strong></Text>
                    <Text>{product.price} ₽</Text>
                </List>
            ))}
        </div>
    );
}

export default GaleriPage;