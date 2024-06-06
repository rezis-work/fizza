import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const user = useSelector((store) => store.user.username);
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      {!totalCartPrice && (
        <p className="hidden items-center gap-2 md:flex">
          <span>&copy; 2024 | Created by Rezi karanadze =&gt; </span> Pick your
          pizza and grab to your cart {user}
        </p>
      )}
      {!totalCartPrice && (
        <p className="m-auto flex items-center gap-2 md:hidden">
          <span>&copy; 2024 | Created by Rezi karanadze</span>
        </p>
      )}
      {totalCartQuantity > 0 && (
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{totalCartQuantity} pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
      )}
      {totalCartQuantity > 0 ? <Link to="/cart">Open cart &rarr;</Link> : ""}
    </div>
  );
}

export default CartOverview;
