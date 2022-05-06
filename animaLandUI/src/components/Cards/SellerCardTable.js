import * as React from "react";
import AddProduct from "../AddProduct";
import UpdateProduct from "../UpdateProduct";
import { deleteProduct, listProducts } from "../../Redux/actions/product";
import { toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button, CardMedia } from "@mui/material";
import spinner from "../../assets/img/spinner.gif";

export default function SellerCardTable() {
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [editedProduct, seteditedProduct] = React.useState({});
  const { errors, loading, success, products } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (errors) {
      toast(errors);
    }
    if (success) {
      toast(success);
      dispatch(listProducts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, dispatch]);

  return (
    <TableContainer component={Paper}>
      {loading ? (
        <img
          src={spinner}
          className="flex flex-col lg:flex-row list-none lg:ml-auto"
          style={{ width: "50%", height: "50%" }}
          alt={{}}
        />
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">
                <AddProduct />
              </TableCell>
              <TableCell align="center">Product Image</TableCell>
              <TableCell align="center">Product name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Update</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.length === 0 ? (
              <h5 className="text-xl font-semibold pb-4">
                No Prodcuts were found! 😔
              </h5>
            ) : (
              products?.map((product) => (
                <TableRow
                  key={product._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    <CardMedia
                      component="img"
                      sx={{ width: "50%" }}
                      image={product.image}
                      alt={product.name}
                    />
                  </TableCell>
                  <TableCell align="center"></TableCell>

                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      onClick={() => {
                        setOpenUpdateModal(true);
                        seteditedProduct(product);
                      }}
                    >
                      Update
                    </Button>
                    <UpdateProduct
                      getProduct={editedProduct}
                      openUpdateModal={openUpdateModal}
                      setOpenUpdateModal={setOpenUpdateModal}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      onClick={() => dispatch(deleteProduct(product._id))}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
