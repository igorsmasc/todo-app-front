import React from "react";
import IconButton from "../template/iconButton";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
          <IconButton
            styleBtn="danger"
            text="Remover"
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
