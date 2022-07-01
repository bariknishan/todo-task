import { format,  } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './calender.css'
const Calender = () => {
    const [date, setDate]= useState(new Date())
    return (
        <div  >
            <h1 className='text-center text-white text-2xl font-bold   mt-4'>Pick Your date</h1>

            <div className='text-white calender   p-4'>
            <p className='text-white'>You picked {format
            (date, 'PP')}</p>
            <  DayPicker 
            
            mode="single"
            selected={date}
            onSelect={setDate}
          
            
            />

            </div>
          
        </div>
    );
};

export default Calender;