import Text from "../../../shades/UI/Text";
import Text2 from "../../../shades/UI/Text2";
import Photo2 from "../../../shades/UI/Photo2";
import List from "../../../shades/UI/List";
import css from "../../../shades/styles/Photo.module.css";

function MastersMainPage() {
  return (
    <>
      <Text2 size={25}>Наши мастера</Text2>
      <div className={css.gallery}>
        <List listStyle="none">
          <Photo2 src="/images/Bob.jpg" />
          <Text>Анна Петрова</Text>
          <Text>Стилист-колорист</Text>
        </List>
        <List listStyle="none">
          <Photo2 src="/images/Us.png" />
          <Text>Мария Иванова</Text>
          <Text>Мастер стрижек</Text>
        </List>
        <List listStyle="none">
          <Photo2 src="/images/Fish.jpg" />
          <Text>Елена Смирнова</Text>
          <Text>Визажист</Text>
        </List>
        <List listStyle="none">
          <Photo2 src="/images/Lev.webp" />
          <Text>Ольга Козлова</Text>
          <Text>Специалист по уходу</Text>
        </List>
      </div>
    </>
  );
}
export default MastersMainPage;