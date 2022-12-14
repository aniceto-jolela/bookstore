import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

const Secured = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {`User is ${!keycloak.authenticated ? " NOT" : ""} authenticated`}
      </div>

      {!!keycloak.authenticated && (
        <>
          <div>{}</div>
          <button type="button" onClick={() => keycloak.logout()}>
            Logout
          </button>
        </>
      )}
    </>
  );
};

export default Secured;
