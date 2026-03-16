import Text from "../../../shades/UI/Text";
import Button from "../../../shades/UI/Button";
import List from "../../../shades/UI/List";

interface IReviewsProps{
    ReviewsPageActionBack?: () => void;
}
function ReviewsPage ({ReviewsPageActionBack}:IReviewsProps) {
    return(
        <div>
            <Text>Отзывы наших клиентов</Text>
            <Button clickAction={ReviewsPageActionBack}>Оставить отзыв</Button>
            <div>
                <List> <Text>5/5</Text> <Text>Прекрасный слон все оке и кайф</Text> <Text>Ирина В.</Text> </List>
                <List> <Text>5/5</Text> <Text>Все было замечательно</Text> <Text>Анна С.</Text> </List>
                <List> <Text>5/5</Text> <Text>Мастер Мария просто огонь</Text> <Text>Шамиль Г.</Text> </List>
                <List> <Text>5/5</Text> <Text>Все четенько, покрасился</Text> <Text>Антон П.</Text> </List>
                <List> <Text>1/5</Text> <Text>Мне не нрав</Text> <Text>Галина П.</Text> </List>
                <List> <Text>5/5</Text> <Text>Потресаюший сервис И профессеанальнзм</Text> <Text>Виктория Р.</Text> </List>
            </div>
        </div>
    )
}
export default ReviewsPage