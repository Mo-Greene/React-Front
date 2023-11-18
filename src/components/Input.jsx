// eslint-disable-next-line no-unused-vars
import React from "react";

function Input(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <form onSubmit={props.handleSubmit}>
            일정 : &nbsp;
            {/* eslint-disable-next-line react/prop-types */}
            <input type="text" required={true} value={props.title} onChange={props.titleChange} placeholder="제목"/> &nbsp;
            {/* eslint-disable-next-line react/prop-types */}
            <input type="text" required={true} value={props.content} onChange={props.contentChange} placeholder="내용"/> &nbsp;
            <input type="submit" value="등록"/>
        </form>
    )
}

export default Input;