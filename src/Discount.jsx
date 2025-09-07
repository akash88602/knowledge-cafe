import { useState, useEffect } from "react";

export default function App() {
  const [lists, setList] = useState([
    { name: "Item 1", price: 100, quantity: 1 },
    { name: "Item 2", price: 200, quantity: 2 }
  ]);

  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0); // discount in percent
  const [finalTotal, setFinalTotal] = useState(0);

  // update quantity
  const updateAty = (v, i) => {
    setList(prevLists =>
      prevLists.map((item, index) =>
        index === i ? { ...item, quantity: Number(v) } : item
      )
    );
  };

  // remove item
  const removeTr = (i) => {
    setList(prevLists => prevLists.filter((_, index) => index !== i));
  };

  // recalc total & discount automatically
  useEffect(() => {
    const t = lists.reduce((sum, d) => sum + d.price * d.quantity, 0);
    setTotal(t);

    const d = (t * discount) / 100;
    setFinalTotal(t - d);
  }, [lists, discount]);

  return (
    <div>
      <h2>Cart</h2>
      <table border="1">
        <thead>
          <tr>m
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateAty(e.target.value, i)}
                  min="1"
                />
              </td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button onClick={() => removeTr(i)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <p>Total: {total}</p>

        <label>
          Discount (%):{" "}
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
          />
        </label>

        <p>Final Total: {finalTotal}</p>
      </div>
    </div>
  );
}
