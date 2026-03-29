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
import MyAppointments from "./pages/second/Ui/MyAppointments";
import AdminPanel from "./pages/admin/AdminPanel"; 

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages: ReactNode[] = [
    <MainPage />,         // 0
    <MastersMainPage />,  // 1
    <UslugiPage />,       // 2
    <GaleriPage />,       // 3
    <ZapisPage ZapisPageActionBack={() => setCurrentPage(7)} />, // 4
    <SingInPage SingInPageActionUp={() => setCurrentPage(0)} SingInPageActionDown={() => setCurrentPage(6)} />, // 5
    <SingUpPage SingUpPageActionUp={() => setCurrentPage(0)} SingUpPageActionDown={() => setCurrentPage(5)} />, // 6
    <MyAppointments />,   // 7
    <AdminPanel onBack={() => setCurrentPage(0)} /> // 8 - НОВАЯ СТРАНИЦА
  ];

  return (
    <div>
       {/* Секретная зона в левом нижнем углу для входа в админку */}
       <div 
         onClick={() => setCurrentPage(8)} 
         style={{ 
           position: 'fixed', bottom: 0, left: 0, 
           width: '40px', height: '40px', 
           zIndex: 9999, cursor: 'pointer' 
         }} 
       />

       <HeaderPage 
         MainPageActionBack={() => setCurrentPage(0)}
         MainPageActionMaster={() => setCurrentPage(1)}
         MainPageActionDo={() => setCurrentPage(2)}
         MainPageActionGaleri={() => setCurrentPage(3)}
         MainPageActionZapis={() => setCurrentPage(4)}
         MainPageActionProfil={() => setCurrentPage(5)}
       />
       
       <div>{pages[currentPage]}</div>
       
       <FuterPage />
    </div>
  );
}

export default App;