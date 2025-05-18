import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import  { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { AddPayement } from '../../../Components/fetchData/Payement';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../../../Components/Alert/succes';
import { DataContext } from '../../../context/DataContext';

type Props = {
    id : number
    totalAmount : number
    nom : string,
    setPay : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Payement({id,totalAmount,nom,setPay}: Props) {
    const stripe = useStripe();
    const {token} = useContext(DataContext);
    const elements = useElements();
    const [error, setError] = useState('');
    const queryClient = useQueryClient();
    const [alertVisible, setAlertVisible] = useState(false);
    const navigate = useNavigate();

    const showAlert = () => setAlertVisible(true);
    const closeAlert = () => {setAlertVisible(false);navigate("/");};

    const mutation = useMutation(
        (newPayement : any) => AddPayement(newPayement,token!),
        {
            onSuccess(value) {
                queryClient.invalidateQueries("payement");
                console.log(value)
                setPay(false)
                showAlert()
            },
            onError(error) {
                console.log("Error Fabien",error);
            }
        }
    );

    const {  handleSubmit } = useForm();
    
    const onSubmit = async () => {
        if (!stripe || !elements) return;
    
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            setError("Impossible de récupérer l'élément de la carte.");
            return;
        }
    
        const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: nom,
            },
        });
    
        if (pmError) {
            setError(pmError.message || 'Erreur lors de la création du moyen de paiement');
            return;
        }
        
        mutation.mutate({
            amount: totalAmount,
            book_id: id,
            payment_method: paymentMethod.id, 
        });
    
        navigate("/")
    };
    
    const cardStyle = {
        style: {
          base: {
            fontSize: '16px',
            color: '#000',
            backgroundColor: '#e5e7eb', // équivalent Tailwind bg-gray-200
            fontFamily: 'Arial, sans-serif',
            '::placeholder': {
              color: '#9ca3af', // placeholder:text-white -> adapt here
            },
            height : "12px",
            padding: '12px',
            borderRadius: '0.5rem', // rounded-lg
            border: '2px solid black',
          },
          invalid: {
            color: '#f44336', // rouge pour erreurs
            iconColor: '#f44336',
          },
        },
      };
      

  return (
    <>
    <CustomAlert
        visible={alertVisible}
        title="Payment Succesfully"
        message="your payement with stripe is succes."
        onClose={closeAlert}
      />
        <div className='fixed w-full h-full top-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-10 ' >
            <div className=' bg-white rounded-2xl relative p-8'>
                <button className='bg-black rounded-md text-white text-2xl px-2 absolute top-0 right-0' onClick={() => setPay(false)  }>x</button>
                <h1 className='text-black text-2xl text-center font-bold p-4'>Payment  </h1>
                <p className='bg-black  px-8 py-3 text-2xl rounded-lg text-white text-center font-bold'>Stripe</p> 
                <h1 className='text-center mt-4'><span className='bg-gray-200  px-4 py-1 rounded-md'> {totalAmount} $  </span> </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full text-center mt-4'>
                    <div className="bg-gray-200 rounded-lg border-2 border-black p-3 w-96">
                        <CardElement options={cardStyle} />
                    </div>                    
                    <button
                        type="submit"
                        className="bg-black text-white px-8 py-2 mt-4 rounded-xl cursor-pointer hover:bg-gray-800"
                        disabled={!stripe}
                    >
                        Pay
                    </button>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    </>
  )
}