import React, { useState } from 'react';
import styles from './SearchSection.module.css';

const SearchSection = ({ searchDate, setSearchDate, searchType, setSearchType, expenses }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [viewDetails, setViewDetails] = useState(null);


  const [isEditing, setIsEditing] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);

  const handleSearch = () => {
    if (!searchDate && !searchType) return;

    const formattedDate = searchDate ? new Date(searchDate).toISOString().split('T')[0] : '';

    const filteredResults = expenses.filter(expense => {
      const matchesDate = searchDate ? expense.date === formattedDate : true;
      const matchesType = searchType ? expense.type === searchType : true;
      return matchesDate && matchesType;
    });


    const uniqueResults = filteredResults.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t.id === item.id
      ))
    );

    setSearchResults(uniqueResults.length > 0 ? uniqueResults : []);
  };

  const handleDelete = async (expense) => {
    try {
      // Replace with your API endpoint
      await fetch(`YOUR_BACKEND_URL/expenses/${expense.id}`, {
        method: 'DELETE',
      });

      setSearchResults(searchResults.filter(item => item.id !== expense.id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const handleEdit = (expense) => {
    setIsEditing(true);
    setCurrentEdit(expense);
  };

  const handleSaveEdit = async () => {
    try {
      await fetch(`YOUR_BACKEND_URL/expenses/${currentEdit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentEdit),
      });

      setSearchResults(searchResults.map(item => 
        item.id === currentEdit.id ? currentEdit : item
      ));
      setIsEditing(false);
      setCurrentEdit(null);
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
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
              <th>Actions</th>
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
                <td>
                  <button className={styles.editButton} onClick={() => handleEdit(expense)}>Edit</button>
                  <button className={styles.deleteButton} onClick={() => handleDelete(expense)}>Delete</button>
                  <button className={styles.viewDetailsButton} onClick={() => setViewDetails(expense)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.noResults}>No transactions found for the selected date and type.</p>
      )}
      {viewDetails && (
        <div className={styles.transactionDetails}>
          <h3>Transaction Details</h3>
          <p>Date: {new Date(viewDetails.date).toLocaleDateString('en-GB')}</p>
          <p>Title: {viewDetails.title}</p>
          <p>Description: {viewDetails.description}</p>
          <p>Amount: ₦{viewDetails.amount.toFixed(2)}</p>
          <p>Type: {viewDetails.type}</p>
          <button onClick={() => setViewDetails(null)} className={styles.closeDetailsButton}>Close</button>
        </div>
      )}
      {isEditing && (
        <div className={styles.editSection}>
          <h3>Edit Transaction</h3>
          <input
            type="text"
            value={currentEdit.title}
            onChange={(e) => setCurrentEdit({ ...currentEdit, title: e.target.value })}
            className={styles.searchInput}
          />
          <input
            type="text"
            value={currentEdit.description}
            onChange={(e) => setCurrentEdit({ ...currentEdit, description: e.target.value })}
            className={styles.searchInput}
          />
          <input
            type="number"
            value={currentEdit.amount}
            onChange={(e) => setCurrentEdit({ ...currentEdit, amount: parseFloat(e.target.value) })}
            className={styles.searchInput}
          />
          <select
            value={currentEdit.type}
            onChange={(e) => setCurrentEdit({ ...currentEdit, type: e.target.value })}
            className={styles.searchInput}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={handleSaveEdit} className={styles.saveButton}>Save</button>
          <button onClick={() => setIsEditing(false)} className={styles.cancelButton}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default SearchSection;


