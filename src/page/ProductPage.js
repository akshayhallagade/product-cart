import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../reducers/productReducer";
import { addToCart, removeItem } from "../reducers/cartReducer";

export default function ProductPage() {
  const products = useSelector((state) => state.products.products);
  const cartItem = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProducts(json));
      });
  }, []);

  const addToCartHandler = (e) => {
    // console.log(e.target.dataset.id);
    dispatch(
      addToCart({
        id: e.target.parentElement.parentElement.dataset.id,
        price: e.target.parentElement.parentElement.dataset.price,
      })
    );
  };

  const removeFromCartHandler = (e) => {
    dispatch(
      removeItem({
        id: e.target.parentElement.parentElement.dataset.id,
        price: e.target.parentElement.parentElement.dataset.price,
      })
    );
  };
  const isProductInCart = (productId) => {
    return cartItem.hasOwnProperty(productId);
  };

  return (
    <div className="bg-gray-400 w-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              className="group card"
              data-id={product.id}
              data-price={product.price}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt="img"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <div className="flex gap-4">
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
                {isProductInCart(product.id) ? (
                  <button
                    className="bg-blue-600 px-2 py-1 text-white"
                    onClick={removeFromCartHandler}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="bg-blue-600 px-2 py-1 text-white"
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
