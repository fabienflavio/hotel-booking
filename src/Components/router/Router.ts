import App from "../../App";
import Chambre from "../../pages/User/Chambre/Chambre";
import ChambreId from "../../pages/User/Chambre/ChambreId.tsx";
import Reservation from "../../pages/User/Chambre/Reservation";
import Connexion from "../../pages/authentification/Login.tsx";
import Inscription from "../../pages/authentification/Register.tsx";
import Admin from "../../pages/Admin/Accueil/Accuel.tsx"
import AdminChambre from "../../pages/Admin/Chambre/Chambre.tsx"
import AdminAjouterChambre from "../../pages/Admin/Chambre/AJouterChambre.tsx"
import AdminModifierChambre from "../../pages/Admin/Chambre/ModifierChambre.tsx"
import AdminReservation from "../../pages/Admin/Reservation/Reservation.tsx"


export const routerdata =   [
    /****** User  ********/
    {
      path: "/",
      element: App 
    },
    {
      path : "/Chambre",
      element: Chambre 
    },
    {
      path : "/Chambre/:id",
      element: ChambreId 
    },
    {
      path : "/Reservation/:id",
      element: Reservation  
    },
  
    /****** Autentification ********/
    {
      path: "/Connexion",
      element: Connexion 
    },
    {
      path: "/Inscription",
      element: Inscription 
    },

    /****** Admin */
    {
      path: "/Admin",
      element: Admin ,
    },
    {
      path: "/AdminChambre",
      element: AdminChambre ,
    },
    {
      path: "/AdminAjouterChambre",
      element:AdminAjouterChambre 
    },
    {
      path: "/AdminModifierChambre/:id",
      element: AdminModifierChambre 
    },
    {
      path: "/AdminReservation",
      element: AdminReservation 
    }
  ]