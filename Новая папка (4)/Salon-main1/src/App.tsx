import { useState } from "react";
import { ReactNode } from "react";
import HeaderPage from "./pages/Main/Ui/Header";
import FuterPage from "./pages/Main/Ui/Futer";
import MainPage from "./pages/Main/Ui/Main";
import MastersMainPage from "./pages/Main/Ui/MastersMain";
import UslugiPage from "./pages/second/Ui/Do";
import GaleriPage from "./pages/second/Ui/Galeri";
import ZapisPage from "./pages/second/Ui/Zapis";
import SingInPage from "./pages/second/Ui/SingIn";
import SingUpPage from "./pages/second/Ui/SingUp";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPassword,setCurrentPassword] = useState("gg")
  
  const pages: ReactNode[] = [
    <MainPage/>,
    <MastersMainPage/>,
    <UslugiPage/>,
    <GaleriPage/>,
    <ZapisPage/>,
    <SingInPage SingInPageActionUp={() => setCurrentPage(0)} SingInPageActionDown={() => setCurrentPage(6)}/>,
    <SingUpPage SingUpPageActionUp={() => setCurrentPage(0)} SingUpPageActionDown={() => setCurrentPage(5)}/>
  ];
  return (
    <div>
      <HeaderPage MainPageActionBack={() => setCurrentPage(0)} 
        MainPageActionMaster={()=>{setCurrentPage(1)}} 
        MainPageActionDo={()=>{setCurrentPage(2)}} 
        MainPageActionGaleri={()=>{setCurrentPage(3)}} 
        MainPageActionZapis={()=>{setCurrentPage(4)}} 
        MainPageActionProfil={()=>{setCurrentPage(5)}}/>
      <div>{pages[currentPage]}</div>
      <FuterPage/>
      
    </div>
  );
}

export default App;
