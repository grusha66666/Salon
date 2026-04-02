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
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Шапка теперь всегда сверху, на любой странице */}
        <HeaderWrapper />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Основные маршруты */}
            <Route path="/" element={<MainPage />} />
            <Route path="/masters" element={<MastersMainPage />} />
            <Route path="/services" element={<UslugiPage />} />
            <Route path="/gallery" element={<GaleriPage />} />
            <Route path="/booking" element={<ZapisPage />} />
            
            {/* Авторизация и профиль */}
            <Route path="/signin" element={<SingInPage />} />
            <Route path="/signup" element={<SingUpPage />} />
            <Route path="/appointments" element={<MyAppointments />} />

            {/* АДМИНКА: Доступна только по прямой ссылке /admin */}
            <Route path="/admin" element={<AdminPanel onBack={() => window.history.back()} />} />

            {/* (Опционально) 404 страница, если ввели несуществующий путь */}
            <Route path="*" element={<div>Страница не найдена</div>} />
          </Routes>
        </main>

        <FuterPage />
      </div>
    </Router>
  );
}



const HeaderWrapper = () => {
  const navigate = useNavigate();

  return (
    <HeaderPage 
      MainPageActionBack={() => navigate('/')}
      MainPageActionMaster={() => navigate('/masters')}
      MainPageActionDo={() => navigate('/services')}
      MainPageActionGaleri={() => navigate('/gallery')}
      MainPageActionZapis={() => navigate('/booking')}
      MainPageActionProfil={() => navigate('/signin')} 
    />
  );
};

export default App;