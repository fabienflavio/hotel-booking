import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";

type Props = {
    control : any,
    errors : any
    label : string
    nameData : string
}
export default function InputDateField( { nameData,label,errors,control} : Props) {
  return (
    <div className="mb-4 ">
    <label className="w-full font-bold block"> {label} </label>
    <Controller
      name={nameData}
      control={control}
      rules={{ required: "Ce champ est requis" }}
      render={({ field }) => (
        <DatePicker
          {...field}
          selected={field.value}
          onChange={(date) => field.onChange(date)}
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
          className="h-10 w-96 bg-white rounded-lg pl-2 border-b-4 focus:border-l-4 border-fuchsia-500 outline-none"
        />
      )}
    />
    {errors && <span className="text-red-500 block">{errors}</span>}
  </div>  )
}