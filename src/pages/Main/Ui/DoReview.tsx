import { useState } from "react";
import { supabase } from "../../../utils/supabase";
import Text from "../../../shades/UI/Text";
import Input from "../../../shades/UI/Input";
import Button from "../../../shades/UI/Button";
import List from "../../../shades/UI/List";
import css from "../../../shades/styles/Panel.module.css";

function AddReviewPage({ onBack }: { onBack: () => void }) {
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = async () => {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            alert("Нужно войти в систему!");
            return;
        }

        const { error } = await supabase
            .from('reviews')
            .insert([
                {
                    user_id: user.id,
                    rating: parseInt(rating),
                    comment: comment
                }
            ]);

        if (error) {
            alert("Ошибка: " + error.message);
        } else {
            alert("Отзыв добавлен!");
            onBack();
        }
    };

    return (
        <div className={css.center}>
            <div className={css.loginCard}>
                <Text size={25}>Оставить отзыв</Text>
                <Text>Ваша оценка (1-5):</Text>
                <Input
                    placholder="5"
                    value={rating}
                    changeAction={(val: string) => setRating(val)}
                />
                <Text>Ваш комментарий:</Text>
                <Input
                    placholder="Напишите здесь..."
                    value={comment}
                    changeAction={(val: string) => setComment(val)}
                />
                <Button clickAction={handleSubmit}>Отправить</Button>
                <Button clickAction={onBack}>Назад</Button>
            </div>
        </div>
    );
}

export default AddReviewPage;