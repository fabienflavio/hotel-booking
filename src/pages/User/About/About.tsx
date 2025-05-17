import HeaderClient from '../../../Components/header/HeaderClient'
import Footer from '../../../Components/footer/Footer'
type Props = {}

export default function About({}: Props) {
  return (
    <div>
        <HeaderClient />

        <div className="px-80">
            <h1 className="text-center bg-Primary-Text text-4xl font-black max-xl:text-2xl pt-10  max-[700px]:text-lg  max-[700px]:pt-5">A propos de nous</h1>
            <div className='flex flex-row mt-4 gap-8'>
                <img src={""} alt="" className='w-80 h-80 rounded-lg' />
                    <div>
                          <h1 className='bg-purple-400 text-white pl-4 font-bold'>Hotel Mayana </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure error accusamus cupiditate dignissimos, alias necessitatibus ratione iusto numquam, doloremque consectetur obcaecati temporibus deserunt impedit harum dolorem ipsum nihil odit aspernatur!
                                Molestiae inciatis vero aliquid expedita nemo sed sit quisquam neque excepturi reiciendis, consequatur tempora libero commodi, eius debitis provident, ea impedit error.
                                dis, repudiandae, ullam maxime, ut nam saepe nostrum facere? Perferendis repellat obcaecati, exercirro quod vitae delectus obcaecati officia? Mollitia.
                            </p>
                    </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}