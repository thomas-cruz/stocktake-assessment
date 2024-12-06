import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from '../types/stocktake';

const Modal: React.FC<ModalProps> = ({ item, nextItem, onClose, setSelected}) => {
  const [countInput, setCountInput] = useState(item.countValue)
  const [dropdownCount, setDropdownCount] = useState(0)

  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[50]'>
      <div className='bg-white p-5 rounded-lg min-w-[500px] max-w-11/12 shadow-md text-center flex flex-col'>
        <h1 className='text-left font-normal text-3xl mb-3 border-b-2 border-b-[#ddd]'>
          Perform Stocktake
        </h1>
        <p className='text-left font-normal border-b-2 border-b-[#ddd] py-4 mb-3'>
          {item.name}
        </p>
        <div className='flex flex-row space-x-10 w-full p-6'>
          <span>
            <input className='w-64 text-center text-3xl p-8 border-2 border-b-[#ddd]' value={item.currentQuantity} readOnly/>
            <p className='uppercase text-sm text-gray-500 text-light'>
              Current
            </p>
          </span>
          <span>
            <input
              className='w-64 text-center text-3xl p-8 border-2 border-b-[#ddd]' 
              type='number'
              value={countInput} 
              onChange={e => setCountInput(parseInt(e.target.value))}
            ></input>
            <p className='uppercase text-sm text-gray-500 text-light'>
              Count
            </p>
          </span>
        </div>

        <div className='flex flex-row justify-around items-center space-x-4 w-full border-2 border-dashed w-11/12'>
          <span className='pl-6 mr-10 flex items-center'>
            <input 
              className='w-36 text-3xl px-4 border-2 border-b-[#ddd] -mr-6'
              value={dropdownCount} 
              onChange={e => setDropdownCount(parseInt(e.target.value))}
            />
            <span className='inline-block h-6 border-l-2 border-b-[#ddd]'></span>
            <select className='mx-1 w-[17px] bg-white' onChange={e => setDropdownCount(parseInt(e.target.value))}>
              <option value="1">+1</option>
              <option value="5">+5</option>
              <option value="10">+10</option>
              <option value="100">+100</option>
              <option value="1000">+1000</option>
            </select>
          </span>
          <span className='pr-6 py-6'>
            <button 
              className='w-64 text-3xl py-4 px-8 rounded-lg border-[1px] border-blue-700 text-blue-700' 
              onClick={()=>setCountInput(item.countValue + dropdownCount)}
            >
              Count
            </button>
          </span>
        </div>
        
        <div className='text-start py-8 border-b-2 border-b-[#ddd]'>
          <p className='text-sm text-gray-500 text-light'><strong>Next:</strong> testname</p>
        </div>
        
        <button className='self-end text-center mt-5 px-6 py-4 bg-blue-700 text-white rounded-md cursor-pointer' onClick={onClose}>
          Save & Next
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal
