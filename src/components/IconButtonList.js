import React from "react";
import IconButton from "./IconButton";
import {iconButtonInfoList} from "../database";

function IconButtonList() { 
  return (
    iconButtonInfoList.map((info) => {
      console.log(info);
      return (<IconButton
        key={info.key}
        iconButton={
          {
            url: info.url,
            src: info.src,
            alt: info.alt
          }
        } />
      );
    })
  );
}

export default IconButtonList;