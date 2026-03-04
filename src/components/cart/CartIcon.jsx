import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { useCart } from "../../context/CartContext";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    
    <Badge
    badgeContent={totalItems}
    color="success"
    invisible={totalItems === 0}
    >
      <ShoppingCartOutlined
        className="cursor-pointer hover:scale-105 transition"
        fontSize="inherit"
      />
    </Badge>
  );
}
