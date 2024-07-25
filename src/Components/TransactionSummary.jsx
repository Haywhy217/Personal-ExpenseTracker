import React, { useState, useEffect } from 'react';
import styles from './TransactionSummary.module.css';

const TransactionSummary = ({ expenses = { data: [] }, setFilterMonth }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filterMonthState, setFilterMonthState] = useState("");

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const getFormattedMonth = (date) => {
    const [year, month] = date.split('-');
    return `${year}-${month}`;
  };

  const expensesArray = Array.isArray(expenses.data) ? expenses.data : [];

  
  const filteredExpenses = expensesArray.filter(expense => {
    const formattedMonth = getFormattedMonth(expense.date);
    return !filterMonthState || formattedMonth === filterMonthState;
  });


  const transactionsToShow = showAll ? filteredExpenses : filteredExpenses.slice(0, 4);

  return (
    <div className={styles.transactionSummary}>
      <h2>Transaction Summary</h2>
      <input
        type="month"
        onChange={(e) => {
          const selectedMonth = e.target.value;
          setFilterMonthState(selectedMonth);
          setFilterMonth(selectedMonth); 
        }}
        value={filterMonthState}
        className={styles.monthFilter}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactionsToShow.length > 0 ? (
            transactionsToShow.map((expense, index) => (
              <tr key={index}>
                <td>{expense.title}</td>
                <td>₦{expense.amount.toFixed(2)}</td>
                <td>
                  <button
                    className={styles.viewDetailsButton}
                    onClick={() => handleViewDetails(expense)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
      {filteredExpenses.length > 4 && !showAll && (
        <button className={styles.viewMoreButton} onClick={() => setShowAll(true)}>
          View More
        </button>
      )}
      {showAll && (
        <button className={styles.viewMoreButton} onClick={() => setShowAll(false)}>
          View Less
        </button>
      )}

      {selectedTransaction && (
        <div className={styles.transactionDetails}>
          <h3>Transaction Details</h3>
          <p><strong>Title:</strong> {selectedTransaction.title}</p>
          <p><strong>Date:</strong> {new Date(selectedTransaction.date).toLocaleDateString('en-GB')}</p>
          <p><strong>Description:</strong> {selectedTransaction.description}</p>
          <p><strong>Amount:</strong> ₦{selectedTransaction.amount.toFixed(2)}</p>
          <p><strong>Type:</strong> {selectedTransaction.type}</p>
          <button className={styles.closeDetailsButton} onClick={() => setSelectedTransaction(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionSummary;
