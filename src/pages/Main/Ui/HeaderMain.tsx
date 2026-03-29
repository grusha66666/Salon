import Text from "../../../shades/UI/Text";
import styles from "Salon-main1\src\shades\styles\Text.module.css";
import css from "../../../shades/styles/FlexContainer.module.css"




function HeaderMainPage () {
    return(
        <div className={css.backgraund}>
            <Text variant="title" size={52}>
                Добро пожаловать в салон City beauty club
            </Text>
            <Text variant="subtitle" size={17}>
                Профессеональный салон красоты для создания вашего неповторимого образа
            </Text>
        </div>
    )
}
export default HeaderMainPage