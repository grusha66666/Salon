import Button from "../../../shades/UI/Button";
import Button2 from "../../../shades/UI/Button2";
import styles from "../styles/header.module.css";


interface IMainPageProps{
    MainPageActionBack?: () => void;
    MainPageActionMaster?: () => void;
    MainPageActionDo?: () => void;
    MainPageActionGaleri?: () => void;
    MainPageActionZapis?: () => void;
    MainPageActionProfil?: () => void;
}


function HeaderPage ({MainPageActionBack,MainPageActionMaster,MainPageActionDo,MainPageActionGaleri,MainPageActionZapis,MainPageActionProfil}: IMainPageProps) {
    return(
        <div className={styles.container}>
            <Button clickAction={MainPageActionBack}>Главная</Button>
            <Button clickAction={MainPageActionMaster}>Cписок мастеров</Button>
            <Button clickAction={MainPageActionDo}>Cписок Услуг</Button>
            <Button clickAction={MainPageActionGaleri}>Галерея товаров</Button>
            <Button2 clickAction={MainPageActionZapis}>Запись</Button2>
            <Button2 clickAction={MainPageActionProfil}>👤</Button2> 
        </div>
    )
}
export default HeaderPage