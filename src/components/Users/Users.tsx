import React from "react";
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    user_photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRoGlp3nyytKQkfv09-SDJXMwJ_SoKt7sY7A&usqp=CAU',
                    followed: false,
                    fullName: "Dmitriy",
                    status: "I am a boss",
                    location: {
                        city: "Minsk",
                        country: "Belarus"
                    }
                },
                {
                    id: 2,
                    user_photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRoGlp3nyytKQkfv09-SDJXMwJ_SoKt7sY7A&usqp=CAU',
                    followed: true,
                    fullName: "Andrey",
                    status: "I am a boss",
                    location: {
                        city: "Moscow",
                        country: "Russia"
                    }
                },
                {
                    id: 3,
                    user_photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRoGlp3nyytKQkfv09-SDJXMwJ_SoKt7sY7A&usqp=CAU',
                    followed: false,
                    fullName: "Sasha",
                    status: "I am a boss",
                    location: {
                        city: "Kiev",
                        country: "Ukraine"
                    }
                }
            ]
        )
    }
    return (
        <div>{
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.user_photo}/>
                    </div>
                    <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>
                    }
                </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
                </div>
            )
        }

        </div>
    )
}