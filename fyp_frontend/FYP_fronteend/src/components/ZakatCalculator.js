import React, { useState } from 'react';
import styles from './ZakatCalculator.module.css';

const ZakatCalculator = () => {
  const [values, setValues] = useState({
    money: '',
    bankBalance: '',
    gold: '',
    silver: '',
    realEstate: '',
  });
  const [zakat, setZakat] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const calculateZakat = () => {
    const { money, bankBalance, gold, silver, realEstate } = values;
    const totalWealth = Number(money) + Number(bankBalance) + Number(gold) + Number(silver) + Number(realEstate);
    const zakatAmount = totalWealth * 0.025;
    setZakat(zakatAmount);
  };

  return (
    <div className={styles.container}>
      <h2>Zakat Calculator</h2>
      <p>
        Zakat is one of the Five Pillars of Islam. It is a mandatory act of charity given to the poor and needy
        and is based on accumulated wealth. Here you can calculate your Zakat.
      </p>
      <div className={styles['form-group']}>
        <label>Money (at home):</label>
        <input type="number" name="money" value={values.money} onChange={handleChange} className={styles['form-control']} />
      </div>
      <div className={styles['form-group']}>
        <label>Bank Balance:</label>
        <input type="number" name="bankBalance" value={values.bankBalance} onChange={handleChange} className={styles['form-control']} />
      </div>
      <div className={styles['form-group']}>
        <label>Gold (more than 7.5 Bhori):</label>
        <input type="number" name="gold" value={values.gold} onChange={handleChange} className={styles['form-control']} />
      </div>
      <div className={styles['form-group']}>
        <label>Silver (more than 52.5 Bhori):</label>
        <input type="number" name="silver" value={values.silver} onChange={handleChange} className={styles['form-control']} />
      </div>
      <div className={styles['form-group']}>
        <label>Real Estate Assets:</label>
        <input type="number" name="realEstate" value={values.realEstate} onChange={handleChange} className={styles['form-control']} />
      </div>
      <button onClick={calculateZakat} className={`${styles.btn} ${styles['btn-primary']}`}>Calculate Zakat</button>
      {zakat !== null && (
        <div className={styles.result}>
          <h3>Zakat Amount: {zakat.toLocaleString('en-PK', { style: 'currency', currency: 'PKR' })}</h3>
        </div>
      )}
      <h3>Understanding Zakat</h3>
      <p>
        Zakat is calculated at 2.5% of a Muslim's total savings and wealth above a minimum amount known as 'Nisab'.
        The Nisab is equivalent to 87.48 grams of gold or 612.36 grams of silver. If the total wealth exceeds the Nisab,
        Zakat is due.
      </p>
      <h3>Examples of Zakat Calculation</h3>
      <ul>
        <li>If you have PKR 500,000 in savings, you need to pay PKR 12,500 as Zakat.</li>
        <li>If you possess 100 grams of gold, you need to pay Zakat on it if it exceeds the Nisab value.</li>
        <li>If you own a property worth PKR 5,000,000, it should be included in your Zakat calculation.</li>
      </ul>
    </div>
  );
};

export default ZakatCalculator;
