import React from "react";
import Text from "./text/Text";
// import AlkaliMetalsTHREE from "./AlkaliMetalsTHREE";

const AlkaliMetals = (props) => (
    <div>
        
        <Text props={props.description} />
    </div>
);

export default props => <AlkaliMetals {...props} />;