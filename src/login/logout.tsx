import * as React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Logout = () => {
  const { keycloak } = useKeycloak();

  return (
    <button type="button" onClick={() => keycloak.logout()}>
      Logout
    </button>
  );
};

export default Logout;
