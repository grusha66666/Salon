import Button from "../../../shades/UI/Button";


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
        <div>
            <Button clickAction={MainPageActionBack}>Главная</Button>
            <Button clickAction={MainPageActionMaster}>Cписок мастеров</Button>
            <Button clickAction={MainPageActionDo}>Cписок Услуг</Button>
            <Button clickAction={MainPageActionGaleri}>Галерея товаров</Button>
            <Button clickAction={MainPageActionZapis}>Запись</Button>
            <Button clickAction={MainPageActionProfil}>👤</Button> 
        </div>
    )
}
export default HeaderPage