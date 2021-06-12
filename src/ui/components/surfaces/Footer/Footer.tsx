import React from "react";
import {
  FooterStyles,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyles>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>About Us</FooterTitle>
          <Typography sx={{ marginTop: 1.5 }}>
            Shiny Home helps you find the perfect professional to clean your
            home. We guarantee the best professionals with high safety measures
            and quality! We have millions of satisfied customers in the country.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Download Apps</FooterTitle>
          <AppList>
            <li>
              <a href="/" target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href="/" target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyles>
  );
};

export default Footer;
