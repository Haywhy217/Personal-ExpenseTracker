import React from 'react';
import styles from './HowToUse.module.css';

const HowToUse = () => {
  return (
    <div className={styles.howToUseContainer}>
      <h2>How to Use Our Expense Tracking App</h2>

      <h3>Introduction</h3>
      <p>Welcome to Trackly! Our app helps you track your expenses and income, view transaction history, and monitor your balance easily.</p>

      <h3>Getting Started</h3>
      <h4>Landing Page</h4>
      <ul>
        <li>Download the app from the App Store or Google Play Store.</li>
        <li>Open the app and create a new account by clicking "Sign Up".</li>
        <li>Enter your email,username , and create a password .</li>
        <li>If you already have an account, click "Log In" and enter your credentials.</li>
      </ul>

      <h4>After Logging In</h4>
      <p>Once logged in, you will be taken to the main expense tracking interface. Here's how to use it:</p>

      <h3>Adding Transactions</h3>
      <h4>Adding an Expense or Income</h4>
      <ul>
        <li>Click on button to add a new transaction.</li>
        <li>Select "Expense" or "Income".</li>
        <li>Enter the amount, choose a category, and add any relevant notes.</li>
        <li>Click "Save" to record the transaction.</li>
      </ul>

      <h3>Viewing Transaction History</h3>
      <ul>
        <li>Go to the "Transactions" tab to view a list of all your transactions.</li>
        <li>You can filter transactions by date, category, or type (expense or income).</li>
      </ul>

      <h3>Monitoring Your Balance</h3>
      <ul>
        <li>Your current balance is displayed at the top of the main screen.</li>
        <li>This balance is automatically updated based on your recorded expenses and income.</li>
      </ul>

      <h3>Need Help?</h3>
      <p>If you encounter any issues or have any questions, please visit our support page or contact us directly through the app.</p>
    </div>
  );
}

export default HowToUse;
