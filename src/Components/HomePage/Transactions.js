const Transactions = ({ Transactions }) => {
  return (
    <>
      {/* <h1>Bank Account Total {totalAmount}</h1> */}
      {/* <tbody> */}
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
      {/* </tbody> */}
    </>
  );
};
export default Transactions;
