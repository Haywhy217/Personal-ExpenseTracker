// Dashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Dashboard.module.css';

const Dashboard = ({ expenses }) => {
  const getMonthlyData = (type) => {
    const months = Array(12).fill(0);
    expenses.forEach(expense => {
      const month = new Date(expense.date).getMonth();
      if (expense.type === type) {
        months[month] += expense.amount;
      }
    });
    return months;
  };

  const incomeData = getMonthlyData('income');
  const expenseData = getMonthlyData('expense');

  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const totalIncome = incomeData.reduce((acc, curr) => acc + curr, 0);
  const totalExpenses = expenseData.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className={styles.dashboardContainer}>
      <h2>Monthly Overview</h2>
      <div className={styles.chartContainer}>
        <Bar data={data} />
      </div>
      <div className={styles.messageContainer}>
        {totalIncome > totalExpenses ? (
          <p className={styles.praiseMessage}>Great job! Your income is greater than your expenses. Keep it up!</p>
        ) : (
          <p className={styles.encouragementMessage}>Don't worry! Your expenses are greater than your income. You can do better next month!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
