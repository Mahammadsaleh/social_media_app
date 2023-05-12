import style from "./css/style.module.css";
function AddProfilePhoto() {
  return (
    <div>
      <img
        className={style.authorImage}
        src="https://geekybytes.net/wp-content/uploads/2022/07/Tanjiro-Kamado-PFP-7.jpeg"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </div>
  );
}

export default AddProfilePhoto;
