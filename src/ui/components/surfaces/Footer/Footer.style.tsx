import { styled, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

export const FooterStyles = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: var(--white-color);
  padding: 3rem 0;
  margin-top: auto;
`;

export const AppList = styled("ul")`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;

  img {
    width: 120px;
  }
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 2rem;
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} {...props} />
))`
  font-size: 1.2rem;
  font-weight: 700;
`;
