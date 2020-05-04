import React, { Fragment } from "react";
import Text from "./text/Text";

const Group1_AlkaliMetals = (props) => (
    <Fragment>
        <section id="visual" className="lesson-container group1-alkalimetals"></section>
        <Text props={props.description} />
    </Fragment>
);

export default Group1_AlkaliMetals;