import banner from "../assets/cu.png";
import React, { useRef, ChangeEvent, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import PhoneInput from "react-phone-input-2";
import toast from "react-hot-toast";

const formSchema = z.object({
  company: z.string().min(1, { message: "Company is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  user_email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  subscribe: z.boolean().optional(),
});

const PhoneInputField: React.FC<{ phoneNumber: string, setPhoneNumber: (phone: string) => void }> = ({ phoneNumber, setPhoneNumber }) => {
  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className="flex flex-col my-4">
      <PhoneInput
        country={'in'}
        value={phoneNumber}
        inputStyle={{
          width: '100%',
          backgroundColor: 'transparent',
          color: '#131313',
          borderBottom: '1px solid #131313',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: '0px',
          fontFamily: 'avenir',
          fontWeight: 'light',
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

const initialFormState = {
  company: '',
  country: '',
  first_name: '',
  last_name: '',
  user_email: '',
  message: '',
  subscribe: false
};

const ContactCard = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(initialFormState);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const errors = result.error.format();
      const errorMessages = Object.values(errors).map((err: any) => err._errors).flat();
      alert(`Validation errors:\n${errorMessages.join('\n')}`);
      return;
    }

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_CONNECTION_TEMPLATE_ID, form.current!, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent!');
          setFormData(initialFormState);
          setPhoneNumber(''); 
          form.current?.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Couldn\'t send message');
        }
      );
  };

  return (
    <div className="min-h-screen bg-white">
      <img src={banner} alt="" className="w-full h-[30vh] object-cover" />
      <form ref={form} className="flex flex-col justify-center items-center py-8" onSubmit={sendEmail}>
        <div className="flex flex-col text-center mb-4">
          <h1 className="font-cormorant text-[#131313] text-3xl md:text-4xl">Let's Connect</h1>
          <p className="font-avenir font-light text-lg md:text-xl text-[#131313]/50">Over a cup of Tea...</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-24 gap-y-4 md:gap-y-6 w-[90%]">
          <input type="hidden" name="phone" value={phoneNumber} />
          <div className="flex flex-col my-4 md:my-2">
            <input name="company" id="company" type="text" placeholder="Company / Name *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          </div>
          <div className="flex flex-col my-4 md:my-2">
            <input name="country" id="country" type="text" placeholder="Country *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          </div>
          <div className="flex flex-col my-4 md:my-2">
            <input name="first_name" id="first_name" type="text" placeholder="First Name *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          </div>
          <div className="flex flex-col my-4 md:my-2">
            <input name="last_name" id="last_name" type="text" placeholder="Last Name *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          </div>
          <div className="flex flex-col my-4 md:my-2">
            <input name="user_email" id="user_email" type="email" placeholder="Email *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          </div>
          <div className="flex flex-col my-4 md:my-2">
            <PhoneInputField phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
          </div>
        </div>
        <div className="flex flex-col my-4 w-[90%]">
          <textarea name="message" id="message" placeholder="Tell us more about your vision? We would love to collaborate with you *" className="border rounded-md text-sm md:text-lg font-avenir placeholder:italic border-[#131313] p-2 resize-none" rows={6} onChange={handleChange} required></textarea>
          <div className="flex my-2 font-avenir font-light text-sm md:text-lg">
            <input name="subscribe" type="checkbox" id="notifications" onChange={handleChange} />
            <label htmlFor="notifications" className="px-4">I would like to receive the Sarvatva newsletter with updates, inspiration and more</label>
          </div>
          <button type="submit" className="text-[#131313] tracking-widest font-medium opacity-80 border-[#131313] backdrop-blur-sm w-full md:w-[200px] my-2 transition-all rounded-md border-[0.5px] font-avenir text-[10px] md:text-sm text-center hover:text-[#EDE6D6] hover:bg-[#131313] px-4 py-2 bg-white/10 shadow-lg">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
