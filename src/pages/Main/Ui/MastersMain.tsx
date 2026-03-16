import Text from "../../../shades/UI/Text";
import Photo from "../../../shades/UI/Photo";
import List from "../../../shades/UI/List";


function MastersMainPage () {
    return(
        <div>
            <Text>Наши мастера</Text>
            <List><Photo src="/images/Bob.jpg"/><Text>Анна Петрова</Text><Text>Стилист-колорист</Text></List>
            <List><Photo src="/images/Us.png"/><Text>Мария Иванова</Text><Text>Мастер стрижек</Text></List>
            <List><Photo src="/images/Fish.jpg"/><Text>Елена Смирнова</Text><Text>Визажист</Text></List>
            <List><Photo src="/images/Lev.webp"/><Text>Ольга Козлова</Text><Text>Специалист по уходу</Text></List>
        </div>
    )
}
export default MastersMainPage