import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { ChangePic } from ".";
import { userAtom } from "../../src/atoms";
import { endpoint } from "../../src/endpoints";
import getUserPfpPath from "../../src/utils/getUserPfp";

const ProfilePicture: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(userAtom);
  const { t, i18n } = useTranslation();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Typography variant="h6" component="h2" className="my-3">
        {t("profile:pfp:title")}
      </Typography>
      <Avatar
        src={getUserPfpPath(loggedInUser.profile.id, loggedInUser.profile.avatar, 240, 240)}
        alt={loggedInUser.profile.name}
        className="my-1"
        sx={{ width: 80, height: 80 }}
      />
      <div className="my-3">
        <ChangePic />
      </div>
    </div>
  );
};

export default ProfilePicture;
