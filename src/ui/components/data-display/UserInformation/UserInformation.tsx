import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  UserAvatar,
  UserRating,
} from "./UserInformation.style";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}
const UserInformation: React.FC<UserInformationProps> = ({
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <UserAvatar src={picture}>{name[0]} </UserAvatar>
      <UserName>{name}</UserName>
      <UserDescription>{description}</UserDescription>
      <UserRating readOnly value={rating} />
    </UserInformationContainer>
  );
};

export default UserInformation;
