import { styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  text-align: center;
  margin: 2em 0;
`;
export const PageTitleH2 = styled("h2")`
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 0;
  font-weight: 700;
  font-size: 2rem;
`;
export const PageSubtitleStyle = styled("p")`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;
