import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button, CardMedia } from "@mui/material";
import { removeFromCart } from "../../Redux/actions/cart";

export default function CardTable() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell align="right">Product name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((cartItem) => (
            <TableRow
              key={cartItem._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <CardMedia
                  component="img"
                  sx={{}}
                  image={cartItem.image}
                  alt={cartItem.name}
                />
              </TableCell>
              <TableCell align="right">{cartItem.name}</TableCell>
              <TableCell align="right">{cartItem.price}</TableCell>
              <TableCell align="right">
                {" "}
                <Button
                  size="small"
                  onClick={() => dispatch(removeFromCart(cartItem._id))}
                >
                  Delete
                </Button>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
