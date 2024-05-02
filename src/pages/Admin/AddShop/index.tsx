import { data } from './data'

const AddShop = () => {
  TxtToObj(data)
  return <div>AddShop</div>
}
export default AddShop

const TxtToObj = (txt: string) => {
  const lines = txt.split('\n')
  const shopName = lines[0].replace('店名: ', '')
  const address = lines[2].replace('地址: ', '')
  const phone = lines[3].replace('電話: ', '')

  const products = []

  for (let i = 7; i < lines.length; i++) {
    if (lines[i] === '') break
    products.push(lines[i])
  }
  console.log(products, shopName, address, phone)
  return { shopName, address, phone, products }
}
