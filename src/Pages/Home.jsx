import React, { useState } from 'react';
import Header from '../Components/Header';
import SummaryCards from '../Components/SummaryCards';
import AddButton from '../Components/AddButton';
import Modal from '../Components/Modal';
import TransactionSummary from '../Components/TransactionSummary';
import SearchSection from '../Components/SearchSection';
import styles from '../Components/Home.module.css';
import Footer from '../Components/Footer';

const Home = () => {
  const [expenses, setExpenses] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense');
  const [showModal, setShowModal] = useState(false);
  const [filterMonth, setFilterMonth] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchType, setSearchType] = useState('');

  const addExpense = (expense) => {
    const dateStr = new Date(expense.date).toISOString().split('T')[0]; 
    setExpenses(prevExpenses => ({
      ...prevExpenses,
      [dateStr]: [...(prevExpenses[dateStr] || []), { ...expense, date: dateStr }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = new Date(date).toISOString().split('T')[0]; 
    addExpense({ title, description, amount: parseFloat(amount), date: formattedDate, type });
    setTitle('');
    setDescription('');
    setAmount('');
    setDate('');
    setType('expense');
    setShowModal(false);
  };

  const calculateTotal = (type) => {
    return Object.values(expenses)
      .flat()
      .filter(expense => expense.type === type)
      .reduce((acc, curr) => acc + curr.amount, 0);
  };

  const totalIncome = calculateTotal('income');
  const totalExpenses = calculateTotal('expense');
  const balance = totalIncome - totalExpenses;

  
  const expensesArray = Object.values(expenses).flat();

  return (
    <>
      <Header />
      <SummaryCards
        balance={balance}
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
      />
      <AddButton onClick={() => setShowModal(true)} />

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

      <div className={styles.container}>
        <TransactionSummary
          expenses={{ data: expensesArray }}
          setFilterMonth={setFilterMonth}
        />
        <SearchSection
          searchDate={searchDate}
          setSearchDate={setSearchDate}
          searchType={searchType}
          setSearchType={setSearchType}
          expenses={expensesArray}
        />
      </div>
      <Footer/>
    </>
  );
};

export default Home;