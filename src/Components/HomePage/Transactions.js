const Transactions = ({ Transactions }) => {
  return (
    <>
      {Transactions.map((transaction) => {
        return (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.item_name}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
          </tr>
        );
      })}
    </>
  );
};
export default Transactions;
