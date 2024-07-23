import React, { useState } from 'react';
import Dashboard from './Dashboard';
import styles from './ExpenseTracker.module.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  console.log(expenses)
  const [selectedMonth, setSelectedMonth] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense');
  const [showDashboard, setShowDashboard] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ description, amount: parseFloat(amount), date, type });
    setDescription('');
    setAmount('');
    setDate('');
    setType('expense');
  };

  const calculateTotal = (type) => {
    return expenses
      .filter(expense => expense.type === type)
      .reduce((acc, curr) => acc + curr.amount, 0);
  };

  const filterByMonth = (expenses, month) => {
    return expenses.filter(expense => expense.date.startsWith(month));
  };

  

  const totalIncome = calculateTotal('income');
  const totalExpenses = calculateTotal('expense');
  const balance = totalIncome - totalExpenses;

  const filteredExpenses = selectedMonth ? filterByMonth(expenses, selectedMonth) : expenses;

  return (
    <div className={styles.expenseTrackerContainer}>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <div className={styles.summary}>
        <h2>Summary</h2>
        <p>Total Income: ₦{totalIncome.toFixed(2)}</p>
        <p>Total Expenses: ₦{totalExpenses.toFixed(2)}</p>
        <p>Balance: ₦{balance.toFixed(2)}</p>
      </div>
      <div className={styles.expenses}>
        <h2>Transactions</h2>
        <label>
          Filter by month:
          <input 
            type="month" 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)} 
          />
        </label>
        <h1 className={styles.TS}>Transaction Summary</h1>
        <ul className={styles.transactionList}>
          {filteredExpenses.map((expense, index) => (
            <li key={index} className={expense.type === 'income' ? styles.income : styles.expense}>
              <span className={styles.description}>{expense.description}</span>
              <span className={styles.amount}>₦{expense.amount.toFixed(2)}</span>
              <span className={styles.date}>{expense.date}</span>
              <span className={styles.type}>{expense.type}</span>
            </li>
          ))}
        </ul>
      </div>
      <button 
        onClick={() => setShowDashboard(!showDashboard)}
        className={styles.dashboardButton}
      >
        {showDashboard ? 'Hide' : 'View'} Dashboard
      </button>
      {showDashboard && <Dashboard expenses={expenses} />}
    </div>
  );
};

export default ExpenseTracker;
