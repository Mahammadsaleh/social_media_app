import style from "./css/style.module.css";
function AddPhoto({ image }) {
  let img;
  if (image) {
    img = (
      <img
        className={style.tweetImage}
        width="auto"
        height={200}
        src={image}
      ></img>
    );
  }
  return (<>
  {img}</>

  );
}

export default AddPhoto;
