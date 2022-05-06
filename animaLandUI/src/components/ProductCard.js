import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/cart";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState({
    id: "",
    isExpanded: false,
  });

  const handleExpandClick = () => {
    setExpanded({
      id: product._id,
      isExpanded: !expanded.isExpanded,
    });
  };

  return (
    <Card className="single-product-card" sx={{ maxWidth: 200, margin: 1 }}>
      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image={product.image}
        alt={product.name}
      />
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>{" "}
          <Typography variant="caption" component="div">
            Type: {product.type}
          </Typography>{" "}
          <Typography gutterBottom variant="caption" component="div">
            Category: {product.category}
          </Typography>
          <Typography gutterBottom variant="button" component="div">
            {product.price} TND
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button size="small" onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </Button>
        <ExpandMore
          expand={expanded.isExpanded && expanded.id === product.id}
          onClick={handleExpandClick}
          aria-expanded={expanded.isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded.isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{product.name}</Typography>
          <Typography paragraph>{product.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductCard;
