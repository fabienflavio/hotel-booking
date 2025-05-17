import { Link } from 'react-router-dom'

type Props = {}

export default function DontHaveAccount({}: Props) {
  return (
    <div className="mt-4">
        <p className="text-center font-light ">
        You don't have an account ? 
        <Link to={"/register"} className=" underline font-normal cursor-pointer mt-4 font-bold hover:text-slate-200"> sign up </Link>
        </p>
    </div>
  )
}