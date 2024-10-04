import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

type CartItemsProps = {
  id: number
	quantity: number
}

export function CartItems({ id, quantity }: CartItemsProps) {
	const { removeFromCart } = useShoppingCart()
	const item = storeItems.find(i => i.id === id)
	if(item == null) return null

	return(
		<Stack direction="horizontal" gap={2}>
			<img 
			src={item.imgUrl} 
			style={{ width: "125px", height: "75px", objectFit: "cover"}}/>
		</Stack>
	)
}