import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props: any) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {
                !editMode &&
                <div>
                       <b>Status:</b> <span onDoubleClick={activateEditMode}
                        >{props.status || "-------"}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;