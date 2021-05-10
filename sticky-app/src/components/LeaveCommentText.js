import React, { useContext } from 'react'
import MainContext from '../MainContext';
import '../App.css';

function LeaveCommentText() {
 const { position } =  useContext(MainContext)
    return (
        <div>
            <div className="leave-comment-text" style={{position: 'fixed', top: position.y[0], left: position.x[1] + 20}}>Yorum yazmak için tıkla</div>
        </div>
    )
}

export default LeaveCommentText
