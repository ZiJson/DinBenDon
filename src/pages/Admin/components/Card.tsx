import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { Button } from '@components/ui/button'
import { Shop } from '@services/queries/shop'

interface Props {
  shop: Shop
}

const CustomCard = ({ shop }: Props) => {
  return (
    <Card className=" w-80">
      <CardHeader>
        <img
          src={''}
          alt={shop.shopName}
          className="w-full h-56  rounded-lg object-contain"
        />
        <CardTitle>{shop.shopName}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>address: {shop.address}</CardDescription>
        <CardDescription>phone: {shop.phone}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>查看菜單</Button>
        <Button>發起訂單</Button>
      </CardFooter>
    </Card>
  )
}

export default CustomCard
