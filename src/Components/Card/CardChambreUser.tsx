
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
    id : number ;
    Name : string ; 
    type : string ;
    prix : number ;
    img : string ;
}

export default function CardChambreUser({id,Name,type,prix,img}: Props) {
  const navigate = useNavigate()

  return (
    <motion.div
      key={id}
      className="shadow-2xl rounded-2xl w-96 pb-8 mb-4 cursor-pointer bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut"  }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        onClick={() => navigate(`/Chambre/${id}`)}
        className="rounded-t-xl object-cover h-40 w-full"
        src={`http://127.0.0.1:8000/${img}`}
        alt={`chambre ${Name}`}
      />

      <div className="flex justify-between ml-4 mt-4 border-l-2 border-black px-4">
        <div>
          <h1 className="text-xl font-bold">Porte {Name}</h1>
          <h2 className="text-sm mt-2">{prix} $ / nuit</h2>
        </div>
        <div>
          <p className="text-sm rounded-md shadow-md bg-white text-gray-900 font-light px-2 py-1">
            {type}
          </p>
        </div>
      </div>
    </motion.div>
  )
}