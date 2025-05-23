type Props = {
    Image : string
    Menu : string
    Header : string
}

export default function HeaderMenu({Image,Menu,Header}: Props) {
  return (
    <div className='w-full h-96 justify-center flex relative'>
        <img className=' w-full h-full object-cover' src={Image} alt="" />
        <div className='absolute bottom-0 px-8 lg:w-[500px] lg:py-12 py-8 bg-white text-center rounded-t-3xl'>
            <h1 className='lg:text-5xl text-4xl font-bold'> { Header} </h1>
            <p className='text-gray-400 mt-4 font-medium'> Home / <span className='text-gray-500'> {Menu}</span> </p>
        </div>
    </div>
  )
}