import { Link } from "react-router-dom";

export default function ButtonPrimary() {
  return (
    <div className="mt-4">
        <Link to="/AdminAjouterChambre" className="max-sm:text-base border-black bg-Primary text-sm px-4 py-2 rounded-xl text-white font-bold">
            + Ajouter un Chambre
        </Link>
    </div>
  )
}