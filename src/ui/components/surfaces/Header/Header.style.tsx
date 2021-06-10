import { styled } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);

  .MuiToolbar-root {
    height: 5rem;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")``;
