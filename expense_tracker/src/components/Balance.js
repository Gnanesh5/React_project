import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amount = transactions.map((val) => val.amount)
  const balance = amount.reduce((a,b) => {
    return a+b;
  }).toFixed(2)
  return (
    <>
    <h4>Your Balance</h4>
    <h1>{balance}</h1>

    </>
  )
}
