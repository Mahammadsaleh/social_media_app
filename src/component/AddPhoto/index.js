import style from "./css/style.module.css";
function AddPhoto() {
  return (
    <img
      className={style.tweetImage}
      width="auto"
      height={250}
      src="https://leadergamer.com.tr/app/uploads/2022/10/demon-slayer.jpg"
    ></img>
  );
}

export default AddPhoto;
