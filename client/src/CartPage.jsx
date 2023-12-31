/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from "react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

// import { UserContext } from "../contexts/UserContext";
import { CartContext } from "./contexts/CartContext";
import { Link } from "react-router-dom";
import MainLoader from "./components/MainLoader";
// import SmallLoading from "../components/SmallLoading";
const CartPage = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const [email, setEmail] = useState("kuipid@gmail.com");
  const [name, setName] = useState("Stephen Adegoke");
  const [phone, setPhone] = useState("8157016669");
  const { cart, setCart } = useContext(CartContext);
  // const {userLoggedIn,userLogged } = useContext(UserContext)
  const [qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [loading, setloading] = useState(true);
  const [Btnloading, setBtnloading] = useState(false);
  const removeFromeCart = (id) => {
    const newCart = cart.filter((p) => p.product.id !== id);

    setCart(newCart);
  };
  useEffect(() => {
    setSubTotal(
      cart.reduce((acc, curr) => acc + Number(curr.product.price * curr.qty), 0)
    );
  }, [cart]);

  const handleQtyDec = (idpassed) => {
    const updatedCart = cart.map((item) => {
      if (item.qty === 1) {
        return { ...item, qty: 1 };
      }
      if (item.id === idpassed) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleQtyInc = (idpassed) => {
    const updatedCart = cart.map((item) => {
      if (item.id === idpassed) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  console.log(cart);
  const [amount, setAmount] = useState("");
  //  const config = {
  //    public_key: "FLWPUBK_TEST-cf4564e4f7931f5cc9f23aa36942617c-X",
  //    tx_ref: Date.now(),
  //    amount: subTotal ,
  //    currency: "NGN",
  //    payment_options: "card,mobilemoney,ussd",
  //    customer: {
  //      email: userLogged?.email,
  //      phone_number:  userLogged?.email,
  //      name:  userLogged?.email,
  //    },
  //    customizations: {
  //      title: "Product Buying Page",
  //      description: "Payment for items in cart",
  //      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  //    },
  //  };

  //  const handleFlutterPayment =   useFlutterwave(config);
  // const handleCheckOut = () => {
  //   setBtnloading(true)
  //   setTimeout(() => {
  //     setBtnloading(false)
  //   }, 1000);
  //   handleFlutterPayment({
  //     callback: (response) => {
  //       console.log(response);
  //       closePaymentModal();
  //     },
  //     onClose: () => {},
  //   },
  //   )

  // }
  if (loading) return <MainLoader />;
  return (
    <div className="relative  w-full mt-10 flex flex-col sm:flex-row px-10 h-fit min-h-[50vh]">
      <div className="w-full  sm:w-[70%] h-full sm:mr-6">
        <div>
          <h1> Cart:</h1>
        </div>
        {cart.length !== 0 ? (
          <div className="w-full flex h-fit  flex-col ">
            {cart.map((c) => (
              <div
                key={c.id}
                className="flex mt-5 shadow shadow-slate-700 h-[100px] px-3 py-2 bg-white  gap-3"
              >
                <div className=" w-fit flex flex-col">
                  <img
                    src={c.product.image}
                    className="w-[100px] sm:w-[100px] h-full object-cover"
                    alt=""
                  />
                  <div className=" h-fit flex justify-center items-center w-max">
                    <span
                      onClick={() => removeFromeCart(c.product?.id)}
                      className=" text-[12px]  text-red-700 cursor-pointer"
                    >
                      {" "}
                      DEL{" "}
                    </span>
                  </div>
                </div>

                <div className="h-full flex mr-3 flex-col justify-evenly">
                  <p className=" text-[13px] sm:text-normal ">
                    {c.product.name}
                  </p>
                  <h4 className="text-[13px] sm:text-normal">
                    <span># {c.product.price}</span>
                  </h4>
                </div>

                <div className=" flex justify-center items-center ml-4">
                  <button
                    onClick={() => handleQtyDec(c?.product.id, c.qty)}
                    className=" p-1 px-2  border-2"
                  >
                    -
                  </button>
                  <p className="mx-2"> {c.qty} </p>
                  <button
                    onClick={() => handleQtyInc(c?.product.id, c?.qty)}
                    className=" p-1 px-2   border-2"
                  >
                    +
                  </button>
                </div>
                <div className="  w-fit  flex flex-col items-center h-full justify-evenly">
                  <h3 className=" text-[12px]  ">Total</h3>
                  <small className="w-fit p-1 text-green-700">
                    #{c.qty * c.product.price}{" "}
                  </small>
                </div>
              </div>
            ))}
            <span
              onClick={() => setCart([])}
              className="mt-5 py-2 text-center rounded-lg cursor-pointer hover:bg-red-600 transition-all w-full md:w-[60%]  bg-red-500 text-slate-300"
            >
              Clear Cart
            </span>
          </div>
        ) : (
          <div className=" w-full h-screen flex justify-center items-center">
            {" "}
            <p className=" text-[15px]  text-green-500">
              Your cart is empty go to{" "}
              <Link className="text-gray-700 uppercase" to={"/"}>
                Home
              </Link>{" "}
              to purchase products{" "}
            </p>{" "}
          </div>
        )}
      </div>
      {cart.length !== 0 ? (
        <div className="w-full sm:w-[30%] p-2 rounded-lg sm:sticky top-0 mt-10 sm:mt-0  bottom-0 h-[400px]  bg-gray-100 sm:right-0  ">
          {" "}
          <div className="flex flex-col gap-1 text-black">
            <h1 className="text-center"> Order Summary:</h1>
            <small className=" text-lg"> Total:# {subTotal} </small>
            <small className=" text-lg">
              {" "}
              <span>
                Discount : <small>0</small>{" "}
              </span>{" "}
            </small>
            <small className=" text-lg">
              {" "}
              <span>
                Delivery Cost : <small>To be determined </small>{" "}
              </span>{" "}
            </small>
            {/* <button onClick={handleCheckOut} className={`w-full h-[30px] sm:h-[50px] mt-6 rounded-xl ${Btnloading ? 'cursor-not-allowed': 'cursor-pointer'} text-white  ${ Btnloading ? 'bg-orange-200' : 'bg-yellow-400'}`}>
          {
              Btnloading ?  <div className="w-full flex justify-center items-center">  <SmallLoading/>  </div> : "CHECKOUT"
            }
            
          </button> */}
          </div>{" "}
        </div>
      ) : (
        <div className="w-full h-fit p-3 bg-red-1000 text-black">
          {" "}
          <h1 className="uppercase">
            {" "}
            {!currentUser ? (
              <Link className="text-green-500" to={"/Login"}>
                Login to checkOut
              </Link>
            ) : (
              ""
            )}{" "}
            {cart.length === 0 ? (
              <span>
                {" "}
                Add Products To Cart To Checkout by going to{" "}
                <Link className="text-yellow-500" to={"/"}>
                  HOME
                </Link>
              </span>
            ) : (
              <span></span>
            )}{" "}
          </h1>{" "}
        </div>
      )}
    </div>
  );
};

export default CartPage;
