import * as React from 'react'
import { TableProps } from '../types/stocktake'

const CountedTable: React.FC<TableProps> = ({ items, setSelected }) => {

  return (
    <>
      <h1 className='text-left font-normal text-3xl text-gray-700 mb-3'>Counted</h1>
      <div className='bg-white rounded-lg shadow-lg p-10'>
        <table className="table-auto w-full">
          <thead>
            <tr className='text-left uppercase text-gray-500 border-b-[#ddd]'>
              <th className='p-4'>Stock Name</th>
              <th className='p-4'>Previous Qty</th>
              <th className='p-4'>Count</th>
              <th className='p-4'>Movement</th>
              <th className='p-4'>Status</th>
              <th className='p-4'></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr
                className='text-left border-t-2 border-b-[#ddd]'
                key={item.stocktakeItemId}
              >
                <td className='p-4 text-sky-600'>{item.name}</td>
                <td className='p-4'>{item.priorQuantity} units</td>
                <td className='p-4'>{item.countValue} units</td>
                <td className='p-4'>{Math.abs(item.priorQuantity - item.countValue)} units</td>
                <td className='p-4'>{
                  item.countValue === item.priorQuantity ? 
                    <p className='text-green-700'>Done</p> : 
                    <p className='text-yellow-700'>Variance</p>
                  }
                </td>
                <td 
                  className='p-1 cursor-pointer more-button'
                  onClick={() => setSelected(item)}
                >
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountedTable;
