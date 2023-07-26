import style from "./css/style.module.css";
import Tweet from "@/component/Tweet";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Modal from "../../elements/Modal/Modal";
import AddBgImg from "../AddBgImg";
import ProfileImg from "../ProfileImg";
import AddUsername from "../AddUsername";
import AddBio from "../AddBio";
import AddJoinedDate from "../AddJoinedDate";
import Follower from "../Follower";
import Following from "../Following";
import BackToHomepage from "../BackToHomepage";
import CloseIcon from "@mui/icons-material/Close";
import AddTweet from "../AddTweet";
import EditProfileInfo from "../EditProfileInfo";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
function AddProfile({ post, profileInfo }) {
  const [profile, setProfile] = useState({
    bio: "",
    displayName: "",
    followers: [],
    following: [],
    location: "",
    photoURL: "",
    website: "",
  });

  // const [{user}] = useStateValue()
  const { username } = useParams();

  const [updatedProfileState, setUpdatedProfileState] = useState({});
  const [finalPhoto, setFinalPhoto] = useState(null);
  const [finalWallpaper, setFinalWallpaper] = useState(null);
  const [isPhotoReady, setIsPhotoReady] = useState(false);
  const [isWallpaperReady, setIsWallpaperReady] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);
  // let isMe = (profile && profile.id) === user.id?true: false

  const [isFollowing, setIsFollowing] = useState(false);
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const [openImage, setOpenImage] = useState(false);
  const [imgsrc, setImgsrc] = useState("");
  const onClickImage = (img) => {
    setImgsrc(img);
    setOpenImage(true);
  };
  const handleCloseImage = () => setOpenImage(false);
  const callbackforModal = () => {
    const { photoToSend, wallpaperToSend } = updatedProfileState.pictureToSend;
    setIsUpdating(true);
    if (photoToSend === profile.photoURL) {
      setFinalPhoto(profile.photoURL);
      setIsPhotoReady(true);
    }

    if (photoToSend !== profile.photoURL) {
      const doFetch = () =>
        postToCloudinary(photoToSend)
          .then((res) => {
            setFinalPhoto(res);
            setIsPhotoReady(true);
          })
          .catch((error) => {
            doFetch();
          });

      doFetch();
    }

    if (wallpaperToSend === profile.wallpaper) {
      setFinalWallpaper(profile.wallpaper);
      setIsWallpaperReady(true);
    }

    if (wallpaperToSend !== profile.wallpaper) {
      if (wallpaperToSend === null) {
        setFinalWallpaper("");
        setIsWallpaperReady(true);
      } else {
        const doFetch = () => {
          postToCloudinary(wallpaperToSend)
            .then((res) => {
              setFinalWallpaper(res);
              setIsWallpaperReady(true);
            })
            .catch((error) => {
              doFetch();
            });
        };
        doFetch();
      }
    }
  };
  return (
    <div className={style.container}>
      <div className={style.mainImages}>
        <BackToHomepage></BackToHomepage>
        <AddBgImg />
        <ProfileImg />
      </div>
      <AddUsername profileInfo={profileInfo} />
      <AddBio profileInfo={profileInfo} />
      {/* <AddJoinedDate  profileInfo={profileInfo}/> */}
      <div className={style.follow}>
        <Follower />
        <Following />
        <button
          className={style.button}
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          <Modal
            open={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            title="Edit Profile"
            callback={callbackforModal}
            Icon={CloseIcon}
            ButtonText="Save"
          >
            <EditProfileInfo />
          </Modal>
        </button>
      </div>
    </div>
  );
}
export default AddProfile;
