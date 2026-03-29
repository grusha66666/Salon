import Text from "../../../shades/UI/Text";
import List from "../../../shades/UI/List";
import Input from "../../../shades/UI/Input";
import Select from "../../../shades/UI/Select";
import Button from "../../../shades/UI/Button";

const Array1 = [
    { text: "О салоне", value: 0 },
    { text: "О Анне Петровой", value: 1 },
    { text: "О Марии Ивановой", value: 2 },
    { text: "о Елене Смирновой", value: 3 },
    { text: "о Ольге Козловой", value: 4 },
]
const Array2 = [
    { text: "5/5", value: 0 },
    { text: "4/5", value: 1 },
    { text: "3/5", value: 2 },
    { text: "2/5", value: 3 },
    { text: "1/5", value: 4 }
]
interface IDoReviewsProps{
    DoReviewsPageActionBack?: () => void;
}
function DoReviewPage ({DoReviewsPageActionBack}:IDoReviewsProps) {
    return(
        <div>
            <Text>Оставить отзыв</Text>
            <Button clickAction={DoReviewsPageActionBack}>Назад к отзывам</Button>
            <List>
                Ваше имя 
                <Input placholder = "Введите ваше имя"/>
                Выберите Какой отзыв вы хотите оставить
                <Select Arroptios={Array1}/>
                Выберите оценку
                <Select Arroptios={Array2}/>
                Ваш отзыв
                <Input placholder = "Расскажите о вашем опыте"/>
                <Button clickAction={DoReviewsPageActionBack}>Отправить отзыв</Button>
            </List>
        </div>
    )
}
export default DoReviewPage