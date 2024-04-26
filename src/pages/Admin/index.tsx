import { useQuery } from '@tanstack/react-query'
import { fetchAllShops } from '@api/queries/shop'

const Admin = () => {
  const { data } = useQuery({ queryKey: ['allShops'], queryFn: fetchAllShops })
  if (!data) return
  return (
    <div>
      Admin
      <div>
        {data?.map((shop) => <div key={shop.shopName}>{shop.shopName}</div>)}
      </div>
    </div>
  )
}

export default Admin
