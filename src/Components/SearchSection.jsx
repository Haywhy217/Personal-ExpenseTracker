import React, { useState } from 'react';
import styles from './SearchSection.module.css';

const SearchSection = ({ searchDate, setSearchDate, searchType, setSearchType, expenses }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!searchDate && !searchType) return;

    const formattedDate = searchDate ? new Date(searchDate).toISOString().split('T')[0] : '';

    const filteredResults = expenses.filter(expense => {
      const matchesDate = searchDate ? expense.date === formattedDate : true;
      const matchesType = searchType ? expense.type === searchType : true;
      return matchesDate && matchesType;
    });

    setSearchResults(filteredResults.length > 0 ? filteredResults : []);
  };

  return (
    <div className={styles.searchSection}>
      <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
        className={styles.searchInput}
      />
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className={styles.searchInput}
      >
        <option value="">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button onClick={handleSearch} className={styles.searchButton}>Search</button>
      {searchResults.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((expense, index) => (
              <tr key={index}>
                <td>{new Date(expense.date).toLocaleDateString('en-GB')}</td>
                <td>{expense.title}</td>
                <td>{expense.description}</td>
                <td>₦{expense.amount.toFixed(2)}</td>
                <td>{expense.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.noResults}>No transactions found for the selected date and type.</p>
      )}
    </div>
  );
};

export default SearchSection;


