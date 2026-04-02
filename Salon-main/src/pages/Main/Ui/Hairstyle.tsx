import Text2 from "../../../shades/UI/Text2";
import Photo2 from "../../../shades/UI/Photo2";
import css from "../../../shades/styles/Photo.module.css";

function HairstylePage() {
  return (
    <>
      <Text2 size={25}>Наши работы</Text2>

      <div className={css.content}>
        <div className={css.gallery}>
          <Photo2 src="/images/Misha.jpg" />
          <Photo2 src="/images/Misha.jpg" />
          <Photo2 src="/images/Misha.jpg" />
          <Photo2 src="/images/Misha.jpg" />
          <Photo2 src="/images/Misha.jpg" />
          <Photo2 src="/images/Misha.jpg" />
          <Photo2 src="/images/Misha.jpg" />
          <Photo2 src="/images/Misha.jpg" />
        </div>
      </div>
    </>
  );
}
export default HairstylePage;