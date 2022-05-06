import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, MenuItem, Select, Slider } from "@mui/material";
import { Box } from "@mui/system";

import { addFilter } from "../Redux/actions/filters";

export default function Sidebar() {
  const { filters } = useSelector((state) => state.filterReducer);

  const dispatch = useDispatch();
  const [price, setPrice] = React.useState([0, 100]);
  const [type, setType] = React.useState(filters.type);
  const [category, setCategory] = React.useState(filters.category);

  const handleChange = (event, newPrice) => {
    setPrice(newPrice);
    dispatch(addFilter("price", event.target.value));
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    dispatch(addFilter("category", event.target.value));
  };

  function priceText(price) {
    return `${price}TND`;
  }

  React.useEffect(() => {
    if (type === "animal") {
      setCategory("cat");
      dispatch(addFilter("type", "animal"));
      dispatch(addFilter("category", "cat"));
    }
    if (type === "supplies") {
      setCategory("toys");
      dispatch(addFilter("type", "supplies"));
      dispatch(addFilter("category", "toys"));
    }
  }, [type, dispatch]);

  return (
    <>
      <div className="md:left-0 md:block md:fixed   md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden  bg-white flex flex-wrap items-center justify-between relative md:w-64 mt-20 md:mt-0  z-10 py-3 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0  flex-wrap items-center justify-between w-full mx-auto">
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pb-3 no-underline">
            Shop types
          </h6>
          <hr className="my-4 md:min-w-full" />
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="text-l font-light leading-relaxed mb-1 text-blueGray-800">
              <Button
                style={
                  type === "animal"
                    ? {
                        background: "#1976d2",
                        color: "white",
                        paddingTop: 6,
                      }
                    : {}
                }
                onClick={() => {
                  setType("animal");
                  dispatch(addFilter("type", "animal"));
                }}
                variant="outlined"
                fullWidth
              >
                Animals
              </Button>
            </li>
            <li className="text-l font-light leading-relaxed mb-1 text-blueGray-800">
              <Button
                style={
                  type === "supplies"
                    ? {
                        background: "#1976d2",
                        color: "white",
                        paddingTop: 6,
                      }
                    : {}
                }
                onClick={() => {
                  setType("supplies");
                  dispatch(addFilter("type", "supplies"));
                }}
                variant="outlined"
                fullWidth
              >
                Supplies
              </Button>
            </li>
          </ul>
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block mt-3 pb-3 no-underline">
            Shop categories
          </h6>
          <hr className="my-4 md:min-w-full" />
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            {type === "animal" && (
              <>
                <li className="text-l font-light leading-relaxed mb-1 text-blueGray-800">
                  Animal categories
                </li>
                <Box mb={1}>
                  <Select
                    sx={{ color: "gray", fontSize: 15, height: 30 }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    fullWidth
                    label="type"
                    defaultValue="cat"
                    value={category}
                    onChange={handleChangeCategory}
                  >
                    <MenuItem value={"cat"}>Cat</MenuItem>
                    <MenuItem value={"dog"}>Dog</MenuItem>
                  </Select>
                </Box>
              </>
            )}
            {type === "supplies" && (
              <>
                <li className="text-l font-light leading-relaxed mb-1 text-blueGray-800">
                  Supplies categories
                </li>
                <Box mb={1}>
                  <Select
                    sx={{ color: "gray", fontSize: 15, height: 30 }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    fullWidth
                    label="type"
                    defaultValue="toys"
                    value={category}
                    onChange={handleChangeCategory}
                  >
                    <MenuItem value={"toys"}>Toys</MenuItem>
                    <MenuItem value={"healthcare"}>Healthcare</MenuItem>
                    <MenuItem value={"beds"}>Beds</MenuItem>
                    <MenuItem value={"clothing & accessories"}>
                      Clothing & Accessories
                    </MenuItem>
                  </Select>
                </Box>
              </>
            )}
          </ul>{" "}
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block mt-6 pb-3 no-underline">
            Filter by Price in TND (1=10TND)
          </h6>
          <hr className="my-4 md:min-w-full" />
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="text-l font-light leading-relaxed mb-1 text-blueGray-800">
              <Box>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={price}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriapriceText={priceText}
                />
              </Box>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
