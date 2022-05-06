import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/actions/user.js";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const UserDropdown = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  // const { cartItems } = useSelector((state) => state.cartReducer);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const onLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };
  const toProfile = () => {
    navigate("/profile");
  };
  const toStore = () => {
    navigate("/seller_store");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={user.name}
            src={user.cover_photo?.url}
            sx={{ width: 40, height: 40 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={toProfile} textAlign="center">
            👦 Profile
          </Typography>
        </MenuItem>{" "}
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={toStore} textAlign="center">
            📈 Store
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={onLogout} textAlign="center">
            🔒 Logout
          </Typography>
        </MenuItem>{" "}
      </Menu>
    </Box>
  );
};

export default UserDropdown;
