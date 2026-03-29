import Text from "../../../shades/UI/Text";
import List from "../../../shades/UI/List";
import Input from "../../../shades/UI/Input";
import Select from "../../../shades/UI/Select";
import Button from "../../../shades/UI/Button";

const Array1 = [
    { text: "Выберите мастера", value: 0 },
    { text: "Анна Петрова", value: 1 },
    { text: "Мария Иванова", value: 2 },
    { text: "Елена Смирнова", value: 3 },
    { text: "Ольга Козлова", value: 4 },
]

const Array2 = [
    { text: "Выберите процедуру", value: 0 },
    { text: "Женсикая стрижка - 2500 Р", value: 1 },
    { text: "Мужская стрижка - 1500 Р", value: 2 },
    { text: "Окрашивание волос - 4500 Р", value: 3 },
    { text: "Мелирование - 5000 Р", value: 4 },
    { text: "Укладка волос - 1800 Р", value: 5 },
    { text: "Уход за волосами - 2200 Р", value: 6 },
    { text: "Ламинирование - 3500 Р", value: 7 },
    { text: "Кератиновое выпрямление - 6500 Р", value: 8 },
    { text: "Свадебная прическа - 5500 Р", value: 9 },
    { text: "Вечерняя прическа - 4000 Р", value: 10 },
    { text: "Макияж - 3000 Р", value: 11 },
    { text: "Маникюр - 1500 Р", value: 12 },
    { text: "Педикюр - 2000 Р", value: 12 },
]

function ZapisPage () {
    return(
        <div>
            <Text>Запись На процедуру</Text>
            <List>
                Ваше имя 
                <Input placholder = "Введите ваше имя"/>
                Номер телефона
                <Input placholder = "+7(___)___-__-__"/>
                Выберите мастера
                <Select Arroptios={Array1}/>
                Выберите процедуру
                <Select Arroptios={Array2}/>
                Введите время в которое вам удоно 
                <Input placholder = "с 10:00 до 21:00"/>
                <Button>Записаться</Button>
            </List>
        </div>
    )
}
export default ZapisPage