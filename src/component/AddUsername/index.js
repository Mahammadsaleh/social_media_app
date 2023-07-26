import style from "./css/styles.module.css";

function AddUsername({profileInfo}) {
    return (
        <div className={style.username}>
            <h1>{profileInfo?.name}</h1>
        </div>
    );
}


export default AddUsername;