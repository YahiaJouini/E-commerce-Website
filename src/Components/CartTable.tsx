export default function CartTable({ children }: { children: React.ReactNode }) {
  return (
    <table className="w-full border-separate border-spacing-y-2 text-sm ">
      <thead className="sr-only">
        <tr className='tr-class'>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}
