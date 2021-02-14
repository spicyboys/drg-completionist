import { useContext } from "react";
import { Context } from "./Store";

export default function useStore() {
  return useContext(Context);
}
