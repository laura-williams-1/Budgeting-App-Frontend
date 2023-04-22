import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((res) => setTransaction(res.data))

      .catch(() => navigate("/not-found"));
  }, [id, navigate]);
  console.log(transaction);
  const delteHandler = () => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      Transaction
      <h1>{transaction.item_name}</h1>
      <td>{transaction.date}</td>
      <td>{transaction.item_name}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.category}</td>
    </div>
  );
};

export default Transaction;
