import { useState, useEffect } from "react";
import Transactions from "./Transactions";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

//INITAL PAGE WHEN SITE LOADS /transactions
export default function Index() {
  const [transactions, setTransactions] = useState([]);
  const [accountTotal, setAccountTotal] = useState("");
  const accountTotalHandler = (totalAccount) => {
    setAccountTotal(totalAccount);
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
        const totalAmount = res.data.reduce(
          (total, transaction) => total + transaction.amount,
          0
        );
        setAccountTotal(totalAmount);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="index">
      <h1>Banking Amount{accountTotal}</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <Transactions
              Transactions={transactions}
              onAccountTotal={accountTotalHandler}
            />
          </tbody>
        </table>
      </section>
    </div>
  );
}
