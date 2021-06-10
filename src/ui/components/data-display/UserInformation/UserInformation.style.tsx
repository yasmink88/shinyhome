import { styled } from "@material-ui/core";
import { Avatar, Rating } from "@material-ui/core";

export const UserInformationContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: 1.2rem;
  display: grid;
  align-items: center;
  gap: 0.2rem 1rem;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar description"
    "avatar rating";
`;

export const UserName = styled("h3")`
  grid-area: name;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.2rem;
`;
export const UserDescription = styled("p")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.8rem;
`;
export const UserAvatar = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial; /*default browser value*/
  aspect-ratio: 1;
`;
export const UserRating = styled(Rating)`
  grid-area: rating;
  font-size: 1.2rem;
`;
