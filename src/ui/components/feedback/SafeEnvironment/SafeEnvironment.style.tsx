import { styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: right;
  padding: 1rem 0;
  font-size: 0.8rem;
`;
