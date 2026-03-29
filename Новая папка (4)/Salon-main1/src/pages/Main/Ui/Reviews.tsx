import Text from "../../../shades/UI/Text";
import Text2 from "../../../shades/UI/Text2";
import Button from "../../../shades/UI/Button";
import List from "../../../shades/UI/List";
import Button2 from "../../../shades/UI/Button2";
import css from "../../../shades/styles/FlexContainer.module.css";
import styles from "../../../shades/styles/Reviews.module.css"

interface IReviewsProps{
    ReviewsPageActionBack?: () => void;
}
function ReviewsPage ({ReviewsPageActionBack}:IReviewsProps) {
    return(
        <div>
            <Text2 size={25}>Отзывы наших клиентов</Text2>
            <li className={css.pozition}><Button2 clickAction={ReviewsPageActionBack}>Оставить отзыв</Button2></li>
            <div className={styles.reviews}>
                <List listStyle="none"> <Text>5/5</Text> <Text>Прекрасный салон все оке и кайф</Text> <Text>Ирина В.</Text> </List>
                <List listStyle="none"> <Text>5/5</Text> <Text>Все было замечательно</Text> <Text>Анна С.</Text> </List>
                <List listStyle="none"> <Text>5/5</Text> <Text>Мастер Мария просто огонь</Text> <Text>Шамиль Г.</Text> </List>
                <List listStyle="none"> <Text>5/5</Text> <Text>Все четенько, покрасился</Text> <Text>Антон П.</Text> </List>
                <List listStyle="none"> <Text>1/5</Text> <Text>Мне не нрав</Text> <Text>Галина П.</Text> </List>
                <List listStyle="none"> <Text>5/5</Text> <Text>Потресаюший сервис И профессеанальнзм</Text> <Text>Виктория Р.</Text> </List>
            </div>
        </div>
    )
}
export default ReviewsPage