import { useState } from 'react'
import RemainingTable from './components/RemainingTable'
import CountedTable from './components/CountedTable'
import { mockRemainingStocktakeItems, mockCountedStocktakeItems } from './constants/stock'
import { IStocktakeItem } from './types/stocktake'
import './App.css'
import Modal from './components/StocktakeModal'

function App() {
  const [remainingStock, setRemainingStock] = useState<IStocktakeItem[]>(mockRemainingStocktakeItems)
  const [countedStock, setCountedStock] = useState<IStocktakeItem[]>(mockCountedStocktakeItems)
  const [selectedItem, setSelectedItem] = useState<IStocktakeItem | null>(null);

  return (
    <>
      <RemainingTable items={remainingStock} setSelected={setSelectedItem}/>
      <CountedTable items={countedStock} setSelected={setSelectedItem}/>
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} setSelected={setSelectedItem}/>
      )}
    </>
  )
}

export default App
