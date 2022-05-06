import React, { useEffect } from "react";
import Navbar from "../components/Navbars/IndexNavbar";
import CardTable from "../components/Cards/CardTable";
import { Button, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { toast } from "react-toastify";
import { emptyCart } from "../Redux/actions/cart";
import { useNavigate } from "react-router-dom";
import { listProducts } from "../Redux/actions/product";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  p: 4,
};

const CartView = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { products } = useSelector((state) => state.userReducer);

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      if (token) {
        dispatch(emptyCart());
        handleOpen();
      } else {
        toast("please login first!");
        setTimeout(() => {
          navigate("/auth/login");
        }, 1500);
      }
    } else {
      toast("Your cart is empty! 😔");
    }
  };

  useEffect(() => {
    dispatch(listProducts(products));
  }, [dispatch, products]);

  return (
    <>
      <Navbar />
      <div className="relative mt-24 flex flex-wrap">
        <div className=" px-4 lg:w-8/12 xl:w-8/12 sm:w-8/12">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
            {cartItems.length <= 0 ? (
              <h5 className="text-xl font-semibold pb-4">
                Your cart is empty! 😔
              </h5>
            ) : (
              <>
                <h5 className="text-xl font-semibold pb-4">Shopping Cart</h5>
                <CardTable />
              </>
            )}
          </span>
        </div>
        <div className=" px-4 xl:w-4/12 lg:w-4/12 sm:w-4/12">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
            <h5 className="text-xl font-semibold pb-4">
              {`Total Price:   
              ${cartItems.reduce((a, c) => {
                return a + c.price;
              }, 0)} TDN`}
            </h5>
            <div>
              <Button onClick={handleCheckout} fullWidth variant="outlined">
                Proceed to checkout
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Congrats! ✨🎉
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Your order is confirmed!
                  </Typography>
                </Box>
              </Modal>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default CartView;
