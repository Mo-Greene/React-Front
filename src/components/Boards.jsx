import React from "react";

const Boards = (props) => {
    return (
        <table className="table table-striped table-bordered text-center">
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
            </tr>
            </thead>
            <tbody>
            {props.board.map((board) => {
                return (
                    <tr key={board.id}>
                        <td>{board.id}</td>
                        <td>{board.title}</td>
                        <td>{board.content}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Boards;