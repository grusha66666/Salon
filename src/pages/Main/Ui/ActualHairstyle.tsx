import Text2 from "../../../shades/UI/Text2";
import Text from "../../../shades/UI/Text";
import Photo2 from "../../../shades/UI/Photo2";
import List from "../../../shades/UI/List";
import css from "../../../shades/styles/Photo.module.css"; 



function ActualHairstylePage () {
    return(
        <><Text2 size={25}>Актуальные прически 2026</Text2>
            <div className={css.gallery}>
                <List listStyle="none"><Photo2 src="/images/Kach.jpg"/><Text>Каскадная стрижка 2026</Text><Text>Самая популярныя стрижка сезона</Text></List>
                <List listStyle="none"><Photo2 src="/images/Kach.jpg"/><Text>Натуральное окрашивание</Text><Text>Актуальные оттенки 2026</Text></List>
                <List listStyle="none"><Photo2 src="/images/Kach.jpg"/><Text>Текстурированный боб</Text><Text>Идеальная прическа для весны</Text></List>
                <List listStyle="none"><Photo2 src="/images/Kach.jpg"/><Text>Профессиональный уход</Text><Text>Восстановаление и блеск</Text></List>
            </div>
        </>
    )
}
export default ActualHairstylePage