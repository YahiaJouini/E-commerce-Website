export default function CartTable({ children }: { children: React.ReactNode }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Product</td>
          <td>Quantity</td>
          <td>Total Price</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}
