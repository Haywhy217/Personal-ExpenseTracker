import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import styles from './Dashboard.module.css';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ expenses = [] }) => {
  // Debugging: Log expenses data
  console.log('Expenses data:', expenses);

  const getMonthlyData = (type) => {
    const months = Array(12).fill(0);
    if (Array.isArray(expenses)) {
      expenses.forEach(expense => {
        if (expense && expense.date && expense.type === type) {
          const month = new Date(expense.date).getMonth();
          console.log(`Expense ${expense.date} (${expense.type}) amount: ${expense.amount} -> month: ${month}`);
          months[month] += expense.amount;
        }
      });
    }
    return months;
  };

  const incomeData = getMonthlyData('income');
  const expenseData = getMonthlyData('expense');

  // Debugging: Log the data for chart
  console.log('Income Data:', incomeData);
  console.log('Expense Data:', expenseData);

  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: 'navy', // Set color for income
      },
      {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: '#ffa300', // Set color for expenses
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          font: {
            size: 14, // Increase font size for X-axis labels
            weight: 'bold', // Make labels bolder
          },
          padding: 10, // Increase padding between labels
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          font: {
            size: 14, // Increase font size for Y-axis labels
            weight: 'bold', // Make labels bolder
          },
          padding: 10, // Increase padding between labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16, // Increase font size for legend labels
            weight: 'bold', // Make legend labels bolder
          },
        },
      },
    },
  };

  const totalIncome = incomeData.reduce((acc, curr) => acc + curr, 0);
  const totalExpenses = expenseData.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className={styles.dashboardContainer}>
      <h2>Monthly Overview</h2>
      <div className={styles.chartContainer}>
        <Bar data={data} options={options} />
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
