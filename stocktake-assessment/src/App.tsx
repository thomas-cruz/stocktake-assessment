import { useState, useEffect, useMemo } from 'react'
import RemainingTable from './components/RemainingTable'
import CountedTable from './components/CountedTable'
import { mockRemainingStocktakeItems, mockCountedStocktakeItems } from './constants/stock'
import { IStocktakeItem } from './types/stocktake'
import './App.css'
import Modal from './components/StocktakeModal'

function App() {
  const [remainingStock, setRemainingStock] = useState<IStocktakeItem[]>(mockRemainingStocktakeItems)
  const [countedStock, setCountedStock] = useState<IStocktakeItem[]>(mockCountedStocktakeItems)
  const [selectedItem, setSelectedItem] = useState<IStocktakeItem | null>(null)
  const [saveItem, setSaveItem] = useState<IStocktakeItem | null>(null)

  
  const removeFromRemaining = (removeId?:number) => {
    const newRemaining = remainingStock.filter(obj => obj.stockId !== removeId)
    setRemainingStock(newRemaining)
  }

  const addToCounted = (item?: IStocktakeItem) => {
    item && setCountedStock([...countedStock, item])
  }

  //getting next item
  const nextItem = useMemo(()=>{
    if(selectedItem){
      const index = remainingStock.findIndex(item => item.stockId === selectedItem.stockId)
      return index + 1 < remainingStock.length ? 
        remainingStock[index + 1] :
        remainingStock[0]
    }
    return null
  }, [selectedItem])

  useEffect(()=>{
    if(selectedItem !== null && saveItem){
      //remove from remaining stock
      removeFromRemaining(saveItem?.stockId)

      //add to counted stock
      addToCounted(saveItem)

      setSaveItem(null)

      //reopen modal with next item
      setSelectedItem(nextItem)
    }
  }, [selectedItem, saveItem])

  return (
    <>
      <div className='flex flex-row mb-10'>
        <button className='text-left text-3xl font-bold text-gray-600 border-2 border-gray-400 rounded-lg px-2 pb-1 mr-2'>←</button>
        <h1 className='text-left text-3xl font-bold text-gray-600'>Stocktake #98</h1>
      </div>
      <RemainingTable items={remainingStock} setSelected={setSelectedItem}/>
      <CountedTable items={countedStock} setSelected={setSelectedItem}/>
      {selectedItem && (
        <Modal item={selectedItem} nextItem={nextItem} onClose={() => setSelectedItem(null)} onSave={setSaveItem} />
      )}
    </>
  )
}

export default App
