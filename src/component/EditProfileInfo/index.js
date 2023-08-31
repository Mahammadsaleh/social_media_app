import style from "./css/style.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { TextField } from "@mui/material";
import CropPhoto from "../EditPhoto/CropPhotoB";
import StatusInput from "../StatusInput/StatusInput";
import { getInfo } from "../../helpers/getImageDimension";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import CommonModal from "../../elements/Modal/Modal";
import FullWidthTabs from "../../elements/TabbarMenu/TabbarMenu";
export default function EditProfileInfo() {
  const { bio, displayName, wallpaper, photoURL } = {
    bio: "hey",
    displayName: "saleh",
    photoURL: "",
    wallpaper: "",
  };
  const [profileState, setProfileState] = useState({
    displayName,
    bio: bio ? bio : "",
  });
  const [src, setSrc] = useState({
    photoSrc: photoURL,
    wallpaperSrc: wallpaper,
  });
  const [pictureToSend, setPictureToSend] = useState({
    photoToSend: photoURL,
    wallpaperToSend: wallpaper,
  });
  const [croppedImageResult, setCroppedImageResult] = useState(null);
  const [initialImageSize, setinitialImageSize] = useState({
    photo: { width: 0, height: 0 },
    wallpaper: { width: 0, height: 0 },
  });
  const [initialAspectRatio, setinitialAspectRatio] = useState({
    photo: null,
    wallpaper: null,
  });

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const onSelectFile = (e, kind) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      if (kind === "photo") {
        setSrc({ ...src, photoSrc: fileReader.result });
        setPictureToSend({ ...pictureToSend, photoToSend: fileReader.result });
        setActiveModal("photo");
      }
      if (kind === "wallpaper") {
        setSrc({ ...src, wallpaperSrc: fileReader.result });
        setPictureToSend({
          ...pictureToSend,
          wallpaperToSend: fileReader.result,
        });
        setActiveModal("wallpaper");
      }
      setIsOpenModal(true);
    };
    fileReader.readAsDataURL(e.target.files[0]);

    getInfo(e).then((res) => {
      if (kind === "photo") {
        setinitialImageSize({
          ...initialImageSize,
          photo: { width: res.width, height: res.height },
        });
      }
      if (kind === "wallpaper") {
        setinitialImageSize({
          ...initialImageSize,
          wallpaper: { width: res.width, height: res.height },
        });
      }
    });
  };

  useEffect(() => {
    setinitialAspectRatio({
      ...initialAspectRatio,
      photo: initialImageSize.photo.width / initialImageSize.photo.height,
      wallpaper:
        initialImageSize.wallpaper.width / initialImageSize.wallpaper.height,
    });
  }, [initialImageSize]);

  const removeWallpaper = () => {
    setSrc({ ...src, wallpaperSrc: null });
    setinitialImageSize({
      ...initialImageSize,
      walpaper: { width: 0, height: 0 },
    });
    setinitialAspectRatio({ ...initialAspectRatio, wallpaper: null });
    setPictureToSend({ ...pictureToSend, wallpaperToSend: "" });
  };

  const changeSrc = () => {
    if (activeModal === "photo") {
      console.log("from photo", croppedImageResult);
      setSrc({
        ...src,
        photoSrc: URL.createObjectURL(croppedImageResult),
      });
      setPictureToSend({ ...pictureToSend, photoToSend: croppedImageResult });
    }
    if (activeModal === "wallpaper") {
      console.log("from wallpaper", croppedImageResult);
      setSrc({
        ...src,
        wallpaperSrc: URL.createObjectURL(croppedImageResult),
      });
      setPictureToSend({
        ...pictureToSend,
        wallpaperToSend: croppedImageResult,
      });
    }
  };

  const callbackforModal = () => {
    changeSrc();
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setActiveModal("");
  };
  const items = [
    {
        id: 0,
        title:'',
        item:  <CropPhoto 
                image = {activeModal==='wallpaper'?src.wallpaperSrc:src.photoSrc}
                setCroppedImageResult ={setCroppedImageResult} 
                initialAspectRatio    = {activeModal==='wallpaper'?initialAspectRatio.wallpaper:initialAspectRatio.photo}
            />
    }
]

  // useEffect(() => {
  //     setUpdatedProfileState({profileState, pictureToSend})
  // }, [profileState, pictureToSend])
  return (
    <>
      
      <div className={style.editProfile}>
        <div
          className={style.editProfileTheme}
          style={{
            backgroundImage: `url(${src.wallpaperSrc && src.wallpaperSrc})`,
          }}
        >
          <div className={style.editProfile__theme_photoWrapper}>
            {src.photoSrc && <img src={src.photoSrc} alt={`${displayName}`} />}
            <div className={style.editProfile__btnWrapper}>
              <StatusInput
                Icon={AddAPhotoOutlinedIcon}
                type="file"
                accept="image/*"
                name="image-upload"
                id="input-wallpaper"
                onChange={(e) => {
                  onSelectFile(e, "photo");
                  setActiveModal("photo");
                }}
              />
            </div>
          </div>
          <div className={style.editProfile__theme_themeActions}>
            <div>
              <StatusInput
                Icon={AddAPhotoOutlinedIcon}
                type="file"
                accept="image/*"
                name="image-upload"
                id="input-photo"
                onChange={(e) => {
                  onSelectFile(e, "wallpaper");
                  setActiveModal("wallpaper");
                }}
              />
            </div>
            <div>
              <div>
                <CloseIcon onClick={removeWallpaper} />{" "}
              </div>
            </div>
          </div>
        </div>

        <form noValidate autoComplete="off">
          <TextField
            id="displayName"
            label="Name"
            variant="filled"
            value={profileState.displayName}
            onChange={(e) =>
              setProfileState({ ...profileState, displayName: e.target.value })
            }
          />
          <TextField
            id="bio"
            label="Bio"
            variant="filled"
            value={profileState.bio}
            onChange={(e) =>
              setProfileState({ ...profileState, bio: e.target.value })
            }
          />
        </form>
      </div>
    </>
  );
}
