type Props = {
    text : string
}

export default function TextFooter({text}: Props) {
  return (
        <p className=" text-white p-2 max-sm:text-center   cursor-pointer borderAnimateOnly " > {text} </p>
  )
}