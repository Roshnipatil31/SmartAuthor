import React from "react";
import { ProfileContainer } from "./Profile.styles";
import ProfileDetails from "../../Components/ProfileComponents/ProfileDetails/ProfileDetails";
import ProfileMyBookProgress from "../../Components/ProfileComponents/ProfileMyBookProgress/ProfileMyBookProgress";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileDetails />
      <ProfileMyBookProgress />
    </ProfileContainer>
  );
};

export default Profile;
