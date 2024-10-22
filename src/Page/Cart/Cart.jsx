// Cart.jsx
import { useContext } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
    const { products, cartItems, updateQuantity } = useContext(OrderContext);
    const cartData = Object.keys(cartItems).flatMap((productId) =>
        Object.keys(cartItems[productId])
            .filter((size) => cartItems[productId][size] > 0)
            .map((size) => ({
                _id: productId,
                size,
                quantity: cartItems[productId][size],
            }))
    );

    return (
        <div className="m-mt_16px">
            <h1 className="text-sm text-start md:text-text_xl lg:py-0 font-bold">Cart</h1>
            <div className="pt-p_16px">
                <div className="lg:flex items-start gap-3">
                    {cartData.map((item, index) => {
                        const productData = products.find((product) => product.id === item.id);

                        return (
                            <div key={index} className="w-full lg:w-[58%] bg-white border-2">
                                <table className=" overflow-x-auto  w-full">
                                    <thead>
                                        <tr className="border-b-4 border-gray-300">
                                            <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                                                {productData?.course_name}
                                            </th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">Price</th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">Quantity</th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">Sub Total</th>
                                        </tr>
                                    </thead>

                                    <tbody className="overflow-x-auto">
                                        <tr className="border-b border-gray-300 overflow-x-auto">
                                            <td>
                                                <div className="flex items-center justify-center ">
                                                    <div className="w-[20%] text-center flex items-center justify-center ">
                                                        <RiDeleteBin5Line
                                                            className="text-xl hover:text-footer_color cursor-pointer"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col text-center justify-center items-center py-2 w-[80%]">
                                                        <div className="mask">
                                                            <img
                                                                className="h-[40px] w-[70px]"
                                                                src={productData?.photo}
                                                                alt="Course"
                                                            />
                                                        </div>
                                                        <p className="text-[14.4px] px-[7px] text-center flex ">
                                                            {productData?.course_name}{" "}
                                                            <span className="hidden lg:flex ">- {item.size}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                                    {Number(productData?.discount_price || 0)}
                                                </p>
                                            </td>
                                            <td>
                                                <div className="flex justify-center">
                                                    <div className="border">
                                                        <button
                                                            className="px-4 w-[30px] font-bold my-1.5"
                                                            onClick={() =>
                                                                updateQuantity(item.id, item.size, item.quantity - 1)
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                    <div className="border-y">
                                                        <input
                                                            type="number"
                                                            value={item.quantity}
                                                            className="font-bold w-[30px] lg:w-[60px] text-center mx-auto h-full"
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="border">
                                                        <button
                                                            className="px-4 w-[30px] font-bold my-1.5"
                                                            onClick={() =>
                                                                updateQuantity(item.id, item.size, item.quantity + 1)
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                                    {Number(productData?.discount_price || 0) * Number(item.quantity || 0)}
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        );
                    })}
                    <div className="lg:w-[41%] bg-white border-2 ">
                        <div className="px-[30px]">
                            <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                                Cart Summary
                            </h2>
                            <div className="py-3 flex justify-between border-b border-gray-300">
                                <p className="text-black font-bold">Total Price</p>
                                <p className="text-black font-bold">
                                    {cartData.reduce((total, item) => {
                                        const product = products.find((product) => product.id === item.id);
                                        return total + Number(product?.discount_price || 0) * Number(item.quantity || 0);
                                    }, 0)}
                                </p>
                            </div>

                            <Link
                                to={`/checkout`}
                                state={"bdt"}
                                className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4 block text-center mx-auto w-full"
                            >
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
