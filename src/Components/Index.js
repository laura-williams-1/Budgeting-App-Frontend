import { useState, useEffect } from "react";
import Transactions from "./Transactions";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(transactions);

  return (
    <div className="index">
      <section>
        <table>
          <thread>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thread>
          <tbody>
            <Transactions Transactions={transactions} />
          </tbody>
        </table>
      </section>
    </div>
  );
}
