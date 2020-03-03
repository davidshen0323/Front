import React from "react"
<<<<<<< HEAD

=======
import InputTasksForm from "./InputTasksForm"
>>>>>>> 5e01c5b0362f226339f6ac86cd92feaaa9082b7c

class InputTask extends React.Component {
    render() {
        return (
            <div>
                <div class="inputTaskTitle">
                    <input type="checkbox" class="taskChk" />
                    <input type="text" class="taskTitle" placeholder="Type Something Here…"  />
                    <i class="far fa-star fa-lg icon"></i>
                    <i class="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                
            </div>)
    }
}

export { InputTask }