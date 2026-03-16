import Text from "../../../shades/UI/Text";
import Photo from "../../../shades/UI/Photo";
import List from "../../../shades/UI/List";


function ActualHairstylePage () {
    return(
        <div>
            <Text>Актуальные прически 2026</Text>
            <List><Photo src="/images/Kach.jpg"/><Text>Каскадная стрижка 2026</Text><Text>Самая популярныя стрижка сезона</Text></List>
            <List><Photo src="/images/Kach.jpg"/><Text>Натуральное окрашивание</Text><Text>Актуальные оттенки 2026</Text></List>
            <List><Photo src="/images/Kach.jpg"/><Text>Текстурированный боб</Text><Text>Идеальная прическа для весны</Text></List>
            <List><Photo src="/images/Kach.jpg"/><Text>Профессиональный уход</Text><Text>Восстановаление и блеск</Text></List>
        </div>
    )
}
export default ActualHairstylePage