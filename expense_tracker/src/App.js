import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TrasactionList } from './components/TrasactionList'
import { AddTransaction } from './components/AddTransaction';

//context provider to eliminate the prop drilling
import { GlobalContext, GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TrasactionList value={''} />
        <AddTransaction />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
