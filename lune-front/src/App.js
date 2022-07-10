import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import RequireDataAuth from "./helpers/require-data-auth";

import Header from './containers/header';
import Footer from './containers/footer';
import Home from './containers/home';
import Register from './containers/user/register';
import Login from './containers/user/login';
import Logout from './containers/user/logout';
import Forgot from './containers/user/forgot';
import Presentation from './containers/presentation';
import Reflexologie from './containers/reflexologie';
import Soins from './containers/soins';
import Tarif from './containers/tarif';
import Poeme from './containers/poeme';
import Admin from './containers/admin/admin';
import EditAnnee from './containers/admin/article/editAnnee';
import AddPoeme from './containers/admin/article/addPoeme';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/register" element={<Register />}/>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/logout" element={<RequireDataAuth child={Logout} auth={true} />}/>
    <Route exact path="/forgot" element={<Forgot />} />
    <Route exact path="/presentation" element={<Presentation />} />
    <Route exact path="/reflexologie" element={<Reflexologie />} />
    <Route exact path="/soins" element={<Soins />} />
    <Route exact path="/tarif" element={<Tarif />} />
    <Route exact path="/poeme" element={<Poeme />} />
    <Route exact path="/admin" element={<RequireDataAuth child={Admin} auth={true} />}/>
    <Route exact path="/editAnnee/:id" element={<RequireDataAuth child={EditAnnee} auth={true} />}/>
    <Route exact path="/addPoeme" element={<RequireDataAuth child={AddPoeme} auth={true} />}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
