import React, {useState} from 'react'
import Header from '../Components/Header';
import SummaryCards from '../Components/SummaryCards';
import AddButton from '../Components/AddButton';
import Modal from '../Components/Modal';


const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense');
  const [showModal, setShowModal] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).replace(/ /g, ', ');
    addExpense({ title, description, amount: parseFloat(amount), date: formattedDate, type });
    setTitle('');
    setDescription('');
    setAmount('');
    setDate('');
    setType('expense');
    setShowModal(false);
  };

  const calculateTotal = (type) => {
    return expenses
      .filter(expense => expense.type === type)
      .reduce((acc, curr) => acc + curr.amount, 0);
  };

  const totalIncome = calculateTotal('income');
  const totalExpenses = calculateTotal('expense');
  const balance = totalIncome - totalExpenses;


  return (
    <>
    <Header/>
    <SummaryCards
    balance={balance}
    totalIncome={totalIncome}
    totalExpenses={totalExpenses}
    
    />
    <AddButton onClick={() => setShowModal(true)}/>

    {showModal && (
        <Modal
          title={title}
          description={description}
          amount={amount}
          date={date}
          type={type}
          setTitle={setTitle}
          setDescription={setDescription}
          setAmount={setAmount}
          setDate={setDate}
          setType={setType}
          handleSubmit={handleSubmit}
          setShowModal={setShowModal}
        />
      )}


    </>
  )
}

export default Home