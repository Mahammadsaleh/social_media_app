import { post } from '@/lib/firebase';
import style from './css/style.module.css';
function AddBodyText({postContent}) {
    return ( <div className={style.tweetBodyText}>{postContent}</div> );
}

export default AddBodyText;