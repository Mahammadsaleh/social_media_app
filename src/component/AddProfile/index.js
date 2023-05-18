import style from "./css/style.module.css";
import Tweet from "@/component/Tweet";
import Link from "next/link";
import AddBgImg from "../AddBgImg";
import ProfileImg from "../ProfileImg";
import AddUsername from "../AddUsername";
import AddBio from "../AddBio";
import AddJoinedDate from "../AddJoinedDate";
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
            <div className={style.follower}>
                <h1 className={style.followernum}>13</h1>
                <Link href="./follower" style={{ textDecoration: 'none' }}><h1 className={style.followertext}>Follower</h1></Link>
            </div>
                
                <Following />
            </div>
        </div>
    )

}
export default AddProfile;