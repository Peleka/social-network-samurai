import React from "react";

// type ProfileStatusPropsType = {
//     status: string
//     updateStatus: (status: string) => void
// }

class ProfileStatus extends React.Component<any, any> {
    // statusInputRef = React.createRef() //с пом ref не выйдет потому что валью в инпуте захардкод

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        // this.props.updateStatus(this.statusInputRef.current.value)
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }


    render() {
        console.log('render')
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode}
                        >{this.props.status || "-------"}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            //@ts-ignore
                            // ref={this.statusInputRef}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;