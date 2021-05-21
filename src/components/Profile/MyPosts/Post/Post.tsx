import React from "react";
import classes from './Post.module.css';


const Post = (props: any) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar}
                 src='https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>

        </div>
    )
}

export default Post;