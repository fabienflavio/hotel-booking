import { FaComment } from "react-icons/fa";
import { IoBed, IoBookmarksSharp } from "react-icons/io5";
import { MdLogout, MdSettings } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";

export const LinkMenuAdmin = [
    {
        id : 1,
        route : "/Admin",
        icons : TbLayoutDashboardFilled,
        label : "Tableau de Bord" 
    },
    {
        id : 2,
        route : "/AdminChambre",
        icons : IoBed,
        label : "Chambre" 
    },
    {
        id : 3,
        route : "/AdminReservation",
        icons : IoBookmarksSharp,
        label : "Reservation" 
    },
    {
        id : 4,
        route : "/AdminCommentaire",
        icons : FaComment,
        label : "Commentaire" 
    },
    {
        id : 5,
        route : "/AdminUtilisateur",
        icons : MdSettings,
        label : "Utilisateur" 
    },
    {
        id : 6,
        route : "/",
        icons : MdLogout,
        label : "Deconnexion" 
    },
]