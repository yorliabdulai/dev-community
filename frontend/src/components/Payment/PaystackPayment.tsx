import React from 'react';
import { usePaystackPayment } from 'react-paystack';
// Define the type for the PaystackPayment component
type PaystackPaymentProps = {
  email: string;
  amount: number;
  onSuccess: (response: any) => void;
  onClose: () => void;
};
// use the PaystackPaymentProps type for the PaystackPayment component
const PaystackPayment: React.FC<PaystackPaymentProps> = ({ email, amount, onSuccess, onClose }) => {
  const config = {
    email,
    amount,
    publicKey: 'your-paystack-public-key'
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <button
        className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => {
          initializePayment({ onSuccess });
        }}
      >
        Pay with Paystack
      </button>
    </div>
  );
};

export default PaystackPayment;
