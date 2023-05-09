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

  const deleteHandler = () => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((err) => console.log(err));
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const day = date.getDate();
    return `${month} ${day}, ${year}`;
  }

  return (
    <div className="transaction-card">
      <h1>{transaction.item_name}</h1>
      <h3>{formatDate(transaction.date)}</h3>

      <h3>{transaction.amount}</h3>
      <h3>{transaction.category}</h3>
      <div>
        {" "}
        <Link to={`/transactions`}>
          <button>Home</button>
        </Link>
      </div>
      <div>
        {" "}
        <Link to={`/transactions/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        {" "}
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default Transaction;
