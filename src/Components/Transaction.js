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
      .then((res) => setTransactions(res.data))
      .catch((e) => console.log(e));
  }, [id, navigate]);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Transaction;
