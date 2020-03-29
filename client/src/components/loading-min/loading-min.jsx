import React from "react";
import css from "./loading-min.module.css";

function LoadingMin() {
  return (
    <div className={css.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default React.memo(LoadingMin);
