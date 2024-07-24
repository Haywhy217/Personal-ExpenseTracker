import React from 'react';
import styles from './SummaryCards.module.css';

const SummaryCards = ({ balance = 0, totalIncome = 0, totalExpenses = 0 }) => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.balanceCard}>
        <h2>Balance</h2>
        <p>₦{balance.toFixed(2)}</p>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div className={styles.incomeCard}>
          <h2>Total Income</h2>
          <p>₦{totalIncome.toFixed(2)}</p>
        </div>
        <div className={styles.expenseCard}>
          <h2>Total Expenses</h2>
          <p>₦{totalExpenses.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;

