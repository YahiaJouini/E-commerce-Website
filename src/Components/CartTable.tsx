export default function CartTable({ children }: { children: React.ReactNode }) {
  return (
    <table className="w-full ">
      <thead className="">
        <tr>
          <th className="">Product</th>
          <th className="">Quantity</th>
          <th className="">Total Price</th>
          <th className=""></th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}
