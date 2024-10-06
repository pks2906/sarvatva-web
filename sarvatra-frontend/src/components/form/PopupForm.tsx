import { useRef, useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import CustomSelector from "./FormSelector";
import toast from "react-hot-toast";

const formSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  communication: z.string().min(1, { message: "Mode of communication is required" }),
  user_email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

interface PhoneInputFieldProps {
  setPhoneNumber: (phone: string) => void;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({ setPhoneNumber }) => {
  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className="flex flex-col my-4">
      <PhoneInput
        country={'in'}
        inputStyle={{
          width: '100%',
          backgroundColor: 'transparent',
          color: '#EDE6D6',
          borderBottom: '1px solid #EDE6D6',
          opacity: '80%',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: '0px',
          fontFamily: 'avenir',
          fontWeight: 'bold',
          padding: '0 40px',
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          border: 'none',
        }}
        dropdownStyle={{
          backgroundColor: '#EDE6D6',
          color: '#131313',
          borderRadius: '6px',
          fontFamily: 'avenir'
        }}
        containerStyle={{
          width: '100%',
        }}
        onChange={handlePhoneChange}
      />
    </div>
  );
};

interface PopupFormProps {
  onClose: () => void;
  productName: string;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose, productName }) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    communication: '',
    user_email: '',
    message: ''
  });
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCommunicationChange = (value: string) => {
    setFormData({
      ...formData,
      communication: value
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = formSchema.safeParse({ ...formData });

    if (!result.success) {
      const errors = result.error.format();
      const errorMessages = Object.values(errors).map((err: any) => err._errors).flat();
      console.log(`Validation errors:\n${errorMessages.join('\n')}`);
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_QUOTATION_TEMPLATE_ID, form.current!, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success('Request sent!');
            onClose();
          },
          (error) => {
            toast.error('Couldn\'t send request');
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#131313] bg-opacity-20">
      <motion.div 
        className="bg-white bg-opacity-10 flex flex-col p-4 md:p-8 rounded-md shadow-lg w-[90%] md:w-[60%] backdrop-blur-md z-60"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className="flex justify-between items-center mb-0 md:mb-8">
          <h1 className="font-cormorant text-[#EDE6D6]/80 font-bold text-lg md:text-xl">Request More Information</h1>
          <button 
            className="text-[#EDE6D6]/80 font-medium text-lg md:text-xl"
            onClick={() => {
              onClose();
              document.body.style.overflow = 'auto';
            }}
          >
            &times;
          </button>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="product_name" value={productName} />
          <input type="hidden" name="phone_number" value={phoneNumber} />
          <input type="hidden" name="communication" value={formData.communication} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 my-4">
            <input type="text" name="first_name" placeholder="First Name" className="bg-transparent placeholder:text-[#EDE6D6]/80 text-[#EDE6D6]/80 font-avenir font-bold py-2 border-b border-[#EDE6D6]/80 rounded-none" onChange={handleChange} required />
            <input type="text" name="last_name" placeholder="Last Name" className="bg-transparent placeholder:text-[#EDE6D6]/80 text-[#EDE6D6]/80 font-avenir font-bold py-2 border-b border-[#EDE6D6]/80 rounded-none" onChange={handleChange} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <CustomSelector
              value={formData.communication}
              onChange={handleCommunicationChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <input type="email" name="user_email" placeholder="Your Email" className="font-avenir bg-transparent py-2 font-bold border-b border-[#EDE6D6]/80 text-[#EDE6D6]/80 placeholder:text-[#EDE6D6]/80 rounded-none" onChange={handleChange} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1 mb-4">
            <PhoneInputField setPhoneNumber={setPhoneNumber}/>
          </div>
          <div className="my-4">
            <textarea name="message" placeholder="Your Message" className="placeholder:text-[#EDE6D6]/80 font-bold border rounded-md text-[#EDE6D6]/80 font-avenir bg-transparent w-full border-[#EDE6D6]/80 p-2 resize-none" rows={4} onChange={handleChange} required></textarea>
          </div>
          <div className="md:mt-4">
            <button type="submit" className="w-full md:w-[100px] transition-all rounded-md font-avenir font-medium text-center hover:opacity-75 px-4 py-2 bg-[#EDE6D6]/80 border-[0.5px] text-[#131313]/80 tracking-wider text-sm">SUBMIT</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PopupForm;
