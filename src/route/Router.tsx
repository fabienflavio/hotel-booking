import App from "../App";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PrivateRouteClient from "../PrivateRoute/PrivateRouteClients";
import AdminAccueil from "../pages/Admin/Accueil/Accuel";
import AdminAjouterChambre from "../pages/Admin/Chambre/AJouterChambre";
import AdminChambre from "../pages/Admin/Chambre/Chambre";
import AdminModifierChambre from "../pages/Admin/Chambre/ModifierChambre";
import AdminCommentaire from "../pages/Admin/Commentaire/Commentaire";
import AdminReservation from "../pages/Admin/Reservation/Reservation";
import AdminUtilisateur from "../pages/Admin/Utilisateur/Utilisateur";
import About from "../pages/User/About/About";
import Chambre from "../pages/User/Chambre/Chambre";
import ChambreId from "../pages/User/Chambre/ChambreId";
import Reservations from "../pages/User/Chambre/Reservation";
import Contact from "../pages/User/Contact/Contact";
import Register from "../pages/authentification/Register";
import Login from "../pages/authentification/Login";
import ForgetPassword from "../pages/authentification/ForgetPassword";
import ResetPassword from "../pages/authentification/ResetPassword";
import AddPhone from "../pages/authentification/AddPhone";
import LoadForgetPassword from "../pages/authentification/LoadForgetPassword";

 export const Router = [
    /****** User  ********/
    {
      path: "/",
      element: <App />
    },
    {
      path : "/Chambre",
      element: <Chambre />
    },
    {
      path : "/Chambre/:id",
      element: <ChambreId />
    },
    {
      path : "/Reservation/:id",
      element: <PrivateRouteClient element={Reservations}  />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/about",
      element: <About />
    },
  
    /****** Autentification ********/
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/add-phone",
      element: <AddPhone />
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />
    },
    {
      path: "/load-forget-password",
      element: <LoadForgetPassword />
    },
    {
      path: "/reset-password",
      element: <ResetPassword />
    },
  
  
    /****** Admin */
    {
      path: "/Admin",
      element: <PrivateRoute element={AdminAccueil} />,
    },


    {
      path: "/AdminChambre",
      element: <PrivateRoute element={AdminChambre} />,
    },
    {
      path: "/AdminAjouterChambre",
      element: <PrivateRoute element={AdminAjouterChambre} />
    },
    {
      path: "/AdminModifierChambre/:id",
      element: <PrivateRoute element={AdminModifierChambre} />
    },

    {
      path: "/AdminReservation",
      element: <PrivateRoute element={AdminReservation} />
    },

    {
      path: "/AdminCommentaire",
      element: <PrivateRoute element={AdminCommentaire} />
    },
    {
      path: "/AdminUtilisateur",
      element: <PrivateRoute element={AdminUtilisateur} />
    }
  ]