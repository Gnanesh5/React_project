import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const ShowTransactions = () => {
  const {transactions, DeleteTranscation} = useContext(GlobalContext);
  var sign = ''
  return (
    transactions.map((item) => (
      <li className = {item.amount < 0 ? 'minus' : 'plus'}>{item.id}
                {item.text} <span>{sign = item.amount < 0 ? '-' : '+'}${Math.abs(item.amount)}</span><button onClick={() => DeleteTranscation} className='delete-btn'>X</button>
            </li>
    ))
  )
}

export const TrasactionList = () => {
  
  return (
    <>
        <h3>
            History
        </h3>
        <ul className="list">
          <ShowTransactions />
        </ul>
    </>
  )
}
