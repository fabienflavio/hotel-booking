import React from 'react'

type Props = {
    onClick :React.ChangeEventHandler<HTMLSelectElement>
}

export default function SelectLanguage({onClick}: Props) {
  return (
         <div className="flex flex-row  p-1 ml-4">
            <select  onChange={onClick}  className={`   h-7 rounded-md px-1 py-1`}>
                <option value="fr" >🇫🇷 Fr </option>
                <option value="us" >🇺🇸 En</option>
              </select>
          </div>
  )
}