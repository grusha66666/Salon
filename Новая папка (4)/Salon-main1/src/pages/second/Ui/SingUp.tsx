import Text from "../../../shades/UI/Text";
import Button from "../../../shades/UI/Button";
import List from "../../../shades/UI/List";
import Input from "../../../shades/UI/Input";

interface ISingUpProps{
    SingUpPageActionUp?: () => void;
    SingUpPageActionDown?: () => void;
}

function SingUpPage ({SingUpPageActionUp,SingUpPageActionDown}: ISingUpProps) {
    return(
        <div>
            <Text>Регестарция</Text>
             <List>
                Введите Ваше имя
                <Input placholder = "Ваше имя"/>
                Введите Номер телефона
                <Input placholder = "+7(___)___-__-__"/>
                Введите пароль
                <Input placholder = "........"/>
                <Button clickAction={SingUpPageActionUp} >Зарегестрироваться</Button>
                <Button clickAction={SingUpPageActionDown}>Уже есть аккаунт? Войдите</Button>
            </List>
        </div>
    )
}
export default SingUpPage