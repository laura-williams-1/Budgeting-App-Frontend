const Transactions = ({ Transactions }) => {
  return (
    <tbody>
      {Transactions.map((transaction) => {
        return (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.from}</td>
            <td>{transaction.category}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default Transactions;
