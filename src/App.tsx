import * as React from "react";
import { useKeycloak } from "@react-keycloak/web";
import Routs from "./routers/routes";

export default function App() {
  const { initialized } = useKeycloak();

  !initialized ? <div>Loading...</div> : "";

  return <Routs/>
}
