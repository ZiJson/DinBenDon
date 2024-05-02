import { useQuery } from '@tanstack/react-query'
import { fetchAllShops } from '@services/queries/shop'
import CustomCard from './components/Card'
import { Button } from '@components/ui/button'
import { Link } from 'react-router-dom'

const Admin = () => {
  const { data } = useQuery({
    queryKey: ['allShops'],
    queryFn: fetchAllShops,
    initialData: []
  })
  return (
    <div className=" container">
      Admin
      <div className=" flex gap-10 flex-wrap items-center">
        <Link to="/admin/addShop">
          <Button size="lg">新增店家</Button>
        </Link>
        {data?.map((shop) => <CustomCard key={shop.shopName} shop={shop} />)}
      </div>
    </div>
  )
}

export default Admin
