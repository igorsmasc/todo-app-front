import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton styleBtn="primary" text="+" onClick={props.handleAdd} />
        <IconButton
          styleBtn="info"
          text="Search"
          onClick={props.handleSearch}
        />
        <IconButton
          styleBtn="default"
          text="Clear"
          onClick={props.handleClear}
        />
      </Grid>
    </div>
  );
};
