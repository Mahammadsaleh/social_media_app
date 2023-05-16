import style from "./css/style.module.css";
import Tweet from "@/component/Tweet";

import AddBgImg from "../AddBgImg";
import ProfileImg from "../ProfileImg";
import AddUsername from "../AddUsername";
import AddBio from "../AddBio";
import AddJoinedDate from "../AddJoinedDate";
import Follower from "../Follower";
import Following from "../Following";
import BackToHomepage from "../BackToHomepage";
function AddProfile({post,profileInfo}){

    return (
        <div className={style.container}>
            <div className={style.mainImages}>
                <BackToHomepage></BackToHomepage>
                <AddBgImg />
                <ProfileImg /> 
            </div>
            <AddUsername profileInfo={profileInfo} />
            <AddBio  profileInfo={profileInfo} />
            <AddJoinedDate  profileInfo={profileInfo}/>
            <div className={style.follow}>
                <Follower /> 
                <Following />
            </div>
        </div>
    )

}
export default AddProfile;