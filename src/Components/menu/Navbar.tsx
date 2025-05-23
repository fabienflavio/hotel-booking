import { IoLogInSharp, IoLogOutSharp, IoMenuSharp } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu"
import { VscChromeClose } from "react-icons/vsc"
import { Link } from "react-router-dom"
import { RiLogoutCircleFill } from "react-icons/ri"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

type Props = {
    menu :boolean
    setMenu : (menu : boolean) => void
    token ?: string
}

export default function Navbar({menu,setMenu,token}: Props) {
  const {setToken} = useContext(DataContext)
  return (
    <div className="w-full max-w-40 relative rounded-xl text-black p-4">
      <div className="absolute z-20 top-0 right-0">
        <AnimatePresence>
          {!menu && (
            <motion.div
              key="menu-icon"
              initial={{ x : -200  }}
              animate={{ x : 0}}
              exit={{ opacity: 0, scale: 0.5 , display : "none" }}
              transition={{ duration: 0.4 }}
            >
              <IoMenuSharp
                onClick={() => setMenu(true)}
                size={24}
                className="absolute right-2 cursor-pointer text-black"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {menu && (
            <motion.div
              key="close-icon"
              initial={{ opacity: 0, rotate: -90 , x : 100 , y : 0 }}
              animate={{ opacity: 1, rotate: 0 , x : 0  , y: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 , delay : 0.2  }}
            >
              <VscChromeClose
                onClick={() => setMenu(false)}
                size={20}
                className="absolute right-24  cursor-pointer text-black"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            key="menu-panel"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3  , delay : 0.2 }}
            className="w- h-screen fixed top-0 right-0 bg-slate-100 shadow-lg z-10 p-6 pt-16"
          >
            <Menu />
            {token ? (
              <div className="pt-4 mt-4 border-t-2">
                <Link
                  className="rounded-lg inline-block"
                  onClick={() => setToken("")}
                  to="/login"
                >
                  Logout
                  <RiLogoutCircleFill size={20} className="inline-block" />
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center border-t-2 py-4 mt-4">
                <Link
                  className="rounded-lg my-2 py-1 px-2 bg-white hover:bg-slate-200"
                  to="/login"
                >
                  Login
                  <IoLogInSharp className="inline-block" size={20} />
                </Link>
                <Link
                  className="rounded-lg border-2 py-1 px-2 text-white border-white hover:bg-black"
                  to="/register"
                >
                  <IoLogOutSharp className="inline-block text-white" size={20} />
                  Sign in
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}