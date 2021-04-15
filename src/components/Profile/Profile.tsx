import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className='backround' src='https://www.awakenthegreatnesswithin.com/wp-content/uploads/2018/08/Nature-Quotes-1.jpg'/>
            </div>
            <div>ava + description</div>
            <div>
                my posts
                <div>New post</div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;