import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="pt-10">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="pt-10 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
