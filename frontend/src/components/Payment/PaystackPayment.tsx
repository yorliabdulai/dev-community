import React from 'react';
import { usePaystackPayment } from 'react-paystack';

const PaystackPayment = ({ email, amount, onSuccess, onClose }) => {
  const config = {
    email,
    amount,
    publicKey: 'your-paystack-public-key',
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <button
        className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Pay with Paystack
      </button>
    </div>
  );
};

export default PaystackPayment;
