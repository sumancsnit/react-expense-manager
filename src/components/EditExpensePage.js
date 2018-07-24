import React from 'react'

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
        i am edit expense page edit {props.match.params.id}
    </div>
    );
}
    

export default EditExpensePage;
