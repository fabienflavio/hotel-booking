import InputText from '../../Components/Ui/Input/InputText'
import { useForm } from 'react-hook-form'
import InputSubmit from '../../Components/Ui/Input/InputSubmit'
import { User } from '../../Components/typescript/User'

type Props = {}

export default function AddPhone({}: Props) {
    const {register , handleSubmit , formState : {errors}} = useForm()

    const onSubmit = (dataForm : User) => {
      console.log(dataForm);
      
    }

  return (
    <div>
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold mb-4">Add your phone number </h1>
            <InputText label='Phone' register={register("phone")} Err={errors.root?.message} />
            <InputSubmit />
          </form>
        </div>
    </div>
  )
}