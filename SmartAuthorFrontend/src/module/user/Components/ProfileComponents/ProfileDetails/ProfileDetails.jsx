// import React from "react";
// import {
//   ProfileCard,
//   ProfileImage,
//   ProfileInfo,
//   StatContainer,
//   StatBox,
//   StatNumber,
//   StatLabel,
//   EditProfileButton,
// } from "./ProfileDetails.styles";
// import theme from "../../../../../theme/Themes";
// import ProfilePic from "../../../../../assets/Profile1.png"; // Add the profile image

// const ProfileDetails = () => {
//   return (
//     <ProfileCard>
//       <ProfileImage src={ProfilePic} alt="User" />
//       <ProfileInfo>
//         <h2>Sneha Gadkar</h2>

//         <StatContainer>
//           <StatBox>
//             <StatNumber>50</StatNumber>
//             <StatLabel>Books Wrote</StatLabel>
//           </StatBox>
//           <StatBox>
//             <StatNumber>80</StatNumber>
//             <StatLabel>Published</StatLabel>
//           </StatBox>
//           <StatBox>
//             <StatNumber>45</StatNumber>
//             <StatLabel>Pending</StatLabel>
//           </StatBox>
//         </StatContainer>

//         <p><strong>Joined in:</strong> Month DD YEAR</p>
//         <p>
//           <strong>Favorite <span style={{ color: theme.colors.navy }}>GENRES</span>:</strong>{" "}
//           Romance, Mystery/Thriller, Fantasy, Science Fiction, +5 More
//         </p>
//         <p><strong>Gender:</strong> Male</p>
//         <p><strong>Location:</strong> City, Country</p>
//         <p><strong>Birth Day:</strong> DD/MM/YYYY</p>
//       </ProfileInfo>

//       <EditProfileButton>Edit Profile ✏️</EditProfileButton>
//     </ProfileCard>
//   );
// };

// export default ProfileDetails;



import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import {
  ProfileCard,
  ProfileImage,
  ProfileInfo,
  StatContainer,
  StatBox,
  StatNumber,
  StatLabel,
  EditProfileButton,
} from "./ProfileDetails.styles";
import theme from "../../../../../theme/Themes";
import ProfilePic from "../../../../../assets/Profile1.png"; // Add the profile image

const ProfileDetails = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleEditProfile = () => {
    navigate("/aboutauthor"); // Navigate to AboutAuthor.jsx page
  };

  return (
    <ProfileCard>
      <ProfileImage src={ProfilePic} alt="User" />
      <ProfileInfo>
        <h2>Sneha Gadkar</h2>

        <StatContainer>
          <StatBox>
            <StatNumber>50</StatNumber>
            <StatLabel>Books Wrote</StatLabel>
          </StatBox>
          <StatBox>
            <StatNumber>80</StatNumber>
            <StatLabel>Published</StatLabel>
          </StatBox>
          <StatBox>
            <StatNumber>45</StatNumber>
            <StatLabel>Pending</StatLabel>
          </StatBox>
        </StatContainer>

        <p><strong>Joined in:</strong> Month DD YEAR</p>
        <p>
          <strong>Favorite <span style={{ color: theme.colors.navy }}>GENRES</span></strong>{" "}
          
          
        </p>
        <p>Romance, Mystery/Thriller, Fantasy, Science Fiction, +5 More</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Location:</strong> City, Country</p>
        <p><strong>Birth Day:</strong> DD/MM/YYYY</p>
      </ProfileInfo>

      <EditProfileButton onClick={handleEditProfile}>Edit Profile ✏️</EditProfileButton>
    </ProfileCard>
  );
};

export default ProfileDetails;
