import React from "react";
import IconButton from "../template/iconButton";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            hide={todo.done}
            styleBtn="success"
            text="Check"
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            hide={!todo.done}
            styleBtn="warning"
            text="Undo"
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton
            hide={!todo.done}
            styleBtn="danger"
            text="Del"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descricao</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
