import HeaderClient from '../../../Components/header/HeaderClient'
import Footer from '../../../Components/footer/Footer'
import HeaderMenu from '../../../Components/header/HeaderMenu'
import ImageAbout from '../../../assets/images/home.jpg'
import ButtonBase from '../../../Components/Ui/Button/ButtonBase'
type Props = {}

export default function About({}: Props) {
  return (
    <div>
        <HeaderClient />
        <HeaderMenu Header='About Us' Image={ImageAbout} Menu='About' />
        <div className="max-w-[1200px] gap-5 m-auto mt-32 text-center">
          <div className='border-[30px] rounded-[100px] border-gray-200 h-[450px] flex justify-center items-center px-16 lg:px-40'>
            <div className=' h-[500px] bg-white flex justify-center items-center'>
              <div>
                <h2 className='text-4xl'> Welcome to seaHotel Booking </h2>
                <p className='my-8'>
                  Now were up in the big leagues getting our turn at bat. One two three four five six seven eight Sclemeel schlemazel hasenfeffer incorporated. Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you.But they got diffrent strokes. It takes diffrent strokes are the voyages of the Starship Enterprise.
                </p>
                <ButtonBase label='Contact' />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}