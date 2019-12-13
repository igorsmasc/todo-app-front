import React from "react";
import IF from "../template/if";

export default props => (
  <IF test={!props.hide}>
    <button className={"btn btn-" + props.styleBtn} onClick={props.onClick}>
      {props.text}
    </button>
  </IF>
);
