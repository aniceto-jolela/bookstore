import * as React from "react";
import Menu from "../menu/menu";
import { PropsChildren } from "../ts/types";

const Layout = ({ Children }: PropsChildren) => {
  return (
    <React.Fragment>
      <Menu Children={Children} />
    </React.Fragment>
  );
};

export default Layout;
