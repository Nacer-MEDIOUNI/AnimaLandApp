import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { updateProduct } from "../Redux/actions/product";

export default function UpdateProduct({
  getProduct,
  openUpdateModal,
  setOpenUpdateModal,
}) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  const handleClose = useCallback(() => {
    setProduct({});
    setOpenUpdateModal(false);
  }, [setOpenUpdateModal]);

  const handleSaveProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct(product));
    handleClose();
  };

  const handleUploadFile = (event) => {
    const data = new FormData();
    data.append("file", event.target.files[0]);
    axios.post("/files", data).then((response) => {
      setProduct({ ...product, image: response.data.fileUrl });
    });
  };
  useEffect(() => {
    if (product.type === "animal") {
      setProduct({ ...product, category: "cat" });
    }
    if (product.type === "supplies") {
      setProduct({ ...product, category: "toys" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.type]);

  useEffect(() => {
    setProduct({ ...getProduct });
  }, [getProduct]);

  return (
    <div>
      <Dialog fullWidth open={openUpdateModal} onClose={handleClose}>
        <DialogTitle>Create product</DialogTitle>
        <form onSubmit={handleSaveProduct}>
          <DialogContent>
            <Box mb={1}>
              <TextField
                margin="dense"
                id="name"
                type="file"
                onChange={handleUploadFile}
                fullWidth
              />
            </Box>
            {product.image && (
              <Box mt={2} mb={2}>
                <img src={product.image} alt="" />
              </Box>
            )}
            <Box mb={2}>
              <TextField
                margin="dense"
                id="name"
                label="Name"
                type="text"
                required
                fullWidth
                variant="outlined"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </Box>
            <Box mb={2}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                fullWidth
                value={product.type}
                onChange={(e) =>
                  setProduct({ ...product, type: e.target.value })
                }
                label="type"
              >
                <MenuItem value={"animal"}>Animal</MenuItem>
                <MenuItem value={"supplies"}>Supplies</MenuItem>
              </Select>
            </Box>
            {product.type === "animal" ? (
              <Box mb={1}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  fullWidth
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  label="type"
                >
                  <MenuItem value={"cat"}>Cat</MenuItem>
                  <MenuItem value={"dog"}>Dog</MenuItem>
                </Select>
              </Box>
            ) : (
              <Box mb={1}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  fullWidth
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  label="type"
                  defaultValue="toys"
                >
                  <MenuItem value={"toys"}>Toys</MenuItem>
                  <MenuItem value={"healthcare"}>Healthcare</MenuItem>
                  <MenuItem value={"beds"}>Beds</MenuItem>
                  <MenuItem value={"clothing & accessories"}>
                    Clothing & Accessories
                  </MenuItem>
                </Select>
              </Box>
            )}
            <Box mb={1}>
              <TextField
                margin="dense"
                id="name"
                label="Price"
                type="number"
                required
                fullWidth
                variant="outlined"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </Box>{" "}
            <Box mb={1}>
              <TextField
                margin="dense"
                id="name"
                label="Video URL"
                type="text"
                fullWidth
                variant="outlined"
                value={product.video}
                onChange={(e) =>
                  setProduct({ ...product, video: e.target.value })
                }
              />
            </Box>{" "}
            <Box mb={1}>
              <TextField
                margin="dense"
                id="name"
                label="Ava. Items in stock"
                type="number"
                required
                fullWidth
                variant="outlined"
                value={product.countInStock}
                onChange={(e) =>
                  setProduct({ ...product, countInStock: e.target.value })
                }
              />
            </Box>{" "}
            <Box mb={1}>
              <TextField
                margin="dense"
                id="name"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
