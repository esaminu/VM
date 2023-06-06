import { Widget } from "./Widget";
import React, { createContext } from "react";
import { useMainnetNear } from "../data/near";

export const NearOverrideContext = createContext(null)

export const MainnetWidget = (props) => {

  return (
      <Widget {...props} config={{...(props.config || {}), chainId: 'mainnet'}} />
  );
}