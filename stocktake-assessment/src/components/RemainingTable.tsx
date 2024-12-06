import * as React from 'react';
import { TableProps } from '../types/stocktake';


const RemainingTable: React.FC<TableProps> = ({ items, setSelected }) => {
  return (
    <>
      <h1 className='text-left font-normal text-3xl text-gray-700 mb-3'>Remaining</h1>
      <div className='bg-white rounded-lg shadow-lg p-10 mb-10'>
        <table className="table-fixed w-full">
          <thead>
            <tr className='text-left uppercase text-gray-500 text-light border-b-[#ddd]'>
              <th className='p-4'>Stock Name</th>
              <th className='p-4'>Current Qty</th>
              <th className='text-right p-4'></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr
                className='text-left border-t-2 border-b-[#ddd]'
                key={item.stocktakeItemId}
              >
                <td className='p-4 text-sky-600'>{item.name}</td>
                <td className='p-4'>{item.currentQuantity} units</td>
                <td 
                  className='text-right p-4 text-sky-600 cursor-pointer'
                  onClick={() => setSelected(item)}
                >
                  Record Count
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RemainingTable;
