import Link from "next/link";
import BackToHomepage from "@/component/BackToHomepage";
import AddFollowerPhoto from "@/component/AddFollowerPhoto";
import AddFollowerName from "@/component/AddFollowerName";
import AddFollowingButton from "@/component/AddFollowerButton";
// import AddFollowerBio from "../AddFollowerBio";
export default function FollowerPage() {
    return(
        <> 
        <BackToHomepage /> 
        <div style={{display:'flex'}}>
            <AddFollowerPhoto /> 
            <AddFollowerName />
            <div style={{
                    marginLeft: '200px'
                
            }}>
                <AddFollowingButton />
            </div>
            
           {/*  <AddFollowerBio /> */}
        </div>
        <div style={{display:'flex'}}>
            <AddFollowerPhoto /> 
            <AddFollowerName />
            <div style={{
                    marginLeft: '200px'
                
            }}>
                <AddFollowingButton />
            </div>
            
           {/*  <AddFollowerBio /> */}
        </div>
        </>
       
    );
}

