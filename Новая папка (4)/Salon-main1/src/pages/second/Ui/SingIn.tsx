import Text from "../../../shades/UI/Text";
import Button from "../../../shades/UI/Button";
import List from "../../../shades/UI/List";
import Input from "../../../shades/UI/Input";

interface ISingUpProps{
    SingInPageActionUp?: () => void;
    SingInPageActionDown?: () => void;
}

function SingInPage ({SingInPageActionUp,SingInPageActionDown}: ISingUpProps) {
    return(
        <div>
            <Text>Вход в аккаунт</Text>
             <List>
                Введите Номер телефона
                <Input placholder = "+7(___)___-__-__"/>
                Введите пароль
                <Input placholder = "........"/>
                <Button clickAction={SingInPageActionUp} >Войти</Button>
                <Button clickAction={SingInPageActionDown}>Нет аккаунта? Зарегестрируйтесь</Button>
            </List>
        </div>
    )
}
export default SingInPage