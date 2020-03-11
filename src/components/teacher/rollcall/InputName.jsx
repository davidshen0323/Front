import React from "react"

class InputName extends React.Component{
    render(){
        return(
            <div className="inputName">
              {this.props.inputName}
            </div>
        )
    }
}

export {InputName}