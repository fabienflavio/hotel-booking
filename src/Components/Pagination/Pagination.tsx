type Props = {
    page : number,
    data : any
    limit : number ,
    setPage : (page : number) => void
}

export default function Pagination({page,data,limit,setPage}: Props) {
    console.log(page)
    console.log(data)
  return (
    <div className="w-full h-20 border-2 justify-center flex flex-wrap gap-5 p-4">
        
        { page === 1 ?  <button  
        className="text-lg bg-gray-200 px-2 py-1 text-white rounded-lg">
            Prec</button>: 
        <button onClick={() => setPage(page-1 )} 
        className="text-lg bg-Primary px-2 py-1 text-white rounded-lg">
            Prec</button>  }
                   {
                        Array.from({ length: Math.ceil(data.totalItems! / limit) }, (_, i) => i + 1).map((i : number) => (
                                <button key={i} onClick={() => setPage(i) } className={`text-lg px-4 py-1  rounded-lg ${i === page ? "bg-gray-300 text-Primary"  : "bg-Primary  text-white"}  `}>  {i} </button>
                        ))
                    }
        { page === Math.ceil(data.totalItems! / limit) ?  
        <button  className="text-lg bg-gray-200 px-2 py-1 text-white rounded-lg">
            Suiv</button>: 
        <button onClick={() =>setPage(page + 1)} 
        className="text-lg bg-Primary px-2 py-1 text-white rounded-lg">
            Suiv</button> }

        </div>
  )
}