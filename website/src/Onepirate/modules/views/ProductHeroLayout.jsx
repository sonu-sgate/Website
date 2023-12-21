import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    // height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
  // border:"1px solid red"
}));

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

function ProductHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        // data-aos="fade-up"
        // mt="0"
        sx={{
          // mt: 3,
          // mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164153/8_big22-768x591.png"
          alt="wonder"
          width="147"
          height="80"
        />

        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />

        {/* <Box
          component="img"
          src="/static/themes/onepirate/productHeroArrowDown.png"
          height="16"
          width="12"
          alt="arrow down"
          sx={{ position: "absolute", bottom: 32 }}
        /> */}
        <IoIosArrowDown />
      </Container>
    </ProductHeroLayoutRoot>
  );
}



export default ProductHeroLayout;
