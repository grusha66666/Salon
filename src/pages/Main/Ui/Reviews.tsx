import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text2 from "../../../shades/UI/Text2";
import Button2 from "../../../shades/UI/Button2";
import styles from "../../../shades/styles/Reviews.module.css";

interface IReviewsProps {
  onAddReviewClick: () => void;
}

function ReviewsPage({ onAddReviewClick }: IReviewsProps) {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          id,
          rating,
          comment,
          created_at,
          profiles (full_name)
        `)
        .order("created_at", { ascending: false });

      if (!error) setReviews(data || []);
    };
    fetchReviews();
  }, []);

  // Функция для отрисовки звезд
  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <Text2 size={32}>Отзывы наших клиентов</Text2>
        <Button2 clickAction={onAddReviewClick}>Оставить отзыв</Button2>
      </div>

      <div className={styles.reviews}>
        {reviews.map((rev) => (
          <div className={styles.reviewCard} key={rev.id}>
            <div className={styles.stars}>
              {renderStars(rev.rating || 5)}
            </div>
            <p className={styles.comment}>{rev.comment}</p>
            <p className={styles.author}>
              {rev.profiles?.full_name || "Аноним"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsPage;