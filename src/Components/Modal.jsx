import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ title, description, amount, date, type, setTitle, setDescription, setAmount, setDate, setType, handleSubmit, setShowModal }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={() => setShowModal(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
</svg>

        </button>
        <h2>Add Expense/Income</h2>
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
      </div>
    </div>
  );
};

export default Modal;
