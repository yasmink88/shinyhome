import { styled } from "@material-ui/system";
import { Paper } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 650px;
  margin: 0 auto 3rem;
`;

export const ProfessionalPaper = styled(Paper)`
  margin: 0 auto 3rem;
  padding: 3rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

export const ProfessionalContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    > :nth-of-type(even) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
