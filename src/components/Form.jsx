import Input from './Input';
import React, { useState } from 'react';
import TextErea from '../components/TextErea'

function Form({ onFormSubmit, isDark }) {

  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    Date: "",
    Time: "",
    Note: ""
  });

 
  const { ownerName, petName, Date, Time, Note } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);

    // console.log(formData);
  };

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} w-full flex items-center justify-center`}>
      <form className='w-3/5 py-5 px-5 grid gap-5' onSubmit={handleSubmit}>
        <div className='text-5xl bg-blue-400 text-white border-t-5 border-blue-700 p-2 text-center'>
          <h4 className=''>Add Appointment</h4>
        </div>
        <div className='grid grid-cols-2 items-center gap-5 '>

          <Input title={'Owner name'} name="ownerName" setInputText={handleInputChange} value={ownerName}/>
          <Input title={'Pet name'} name="petName" setInputText={handleInputChange} value={petName}/>
          <Input title={'Apt Date'} name="Date" type='date' setInputText={handleInputChange} value={Date}/>
          <Input title={'Apt Time'} name="Time" type='time' setInputText={handleInputChange} value={Time}/>
          <TextErea title={'Note'} name="Note" value={Note} setInputText={handleInputChange}/>
          
        </div>
        <button className='relative justify-self-end bg-blue-400 px-5 py-2 text-white rounded-xl'>
          Submit
        </button>
      </form>
    </div>
  );
}



export default Form;
