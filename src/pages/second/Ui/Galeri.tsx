import Text from "../../../shades/UI/Text";
import Photo from "../../../shades/UI/Photo";
import List from "../../../shades/UI/List";


function GaleriPage () {
    return(
        <div>
            <Text>Галерея товара</Text>
            <List><Photo src="/images/Plug.webp"/><Text>Шампунь профессиональный</Text><Text>1500 Р</Text></List>
            <List><Photo src="/images/Plug.webp"/><Text>Набор для ухода</Text><Text>3500 Р</Text></List>
            <List><Photo src="/images/Plug.webp"/><Text>Масло для волос</Text><Text>2200 Р</Text></List>
            <List><Photo src="/images/Plug.webp"/><Text>Косметика для макияжа</Text><Text>4500 Р</Text></List>
            <List><Photo src="/images/Plug.webp"/><Text>Лак для ногтей</Text><Text>800 Р</Text></List>
            <List><Photo src="/images/Plug.webp"/><Text>Средства для ногтей</Text><Text>1800 Р</Text></List>
        </div>
    )
}
export default GaleriPage