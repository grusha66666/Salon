import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import Text2 from "../../../shades/UI/Text2";
import Button2 from "../../../shades/UI/Button2";
import List from "../../../shades/UI/List";
import styles from "../../../shades/styles/Reviews.module.css";

interface IReviewsProps {
    onAddReviewClick: () => void;
}

function ReviewsPage({ onAddReviewClick }: IReviewsProps) {
    const [reviews, setReviews] = useState<any[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const { data, error } = await supabase
                .from('reviews')
                .select(`
                    id,
                    rating,
                    comment,
                    created_at,
                    profiles (full_name)
                `)
                .order('created_at', { ascending: false });

            if (!error) setReviews(data || []);
        };
        fetchReviews();
    }, []);

    return (
        <div className={styles.container}>
            {/* Контейнер для заголовка и кнопки */}
            <div className={styles.headerRow}>
                <Text2 size={25}>Отзывы наших клиентов</Text2>
                <Button2 clickAction={onAddReviewClick}>Оставить отзыв</Button2>
            </div>

            <div className={styles.reviews}>
                {reviews.map((rev) => (
                    <div className={styles.reviewCard} key={rev.id}>
                        <Text>{rev.rating}/5</Text>
                        <Text>{rev.comment}</Text>
                        <Text>{rev.profiles?.full_name || "Аноним"}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewsPage;