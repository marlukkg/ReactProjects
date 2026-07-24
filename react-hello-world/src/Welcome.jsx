import { useState } from "react";



export const Welcome = (props) => {
  return <h2>Welcome again {props.name} {props.lastName}!</h2>;
}