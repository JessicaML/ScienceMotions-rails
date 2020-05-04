import React from "react";
import Text from "./text/Text";


const GroupsPeriods = props => {

  return (
    <div>
      <Text props={props.description} />
    </div>
  );
};

export default props => <GroupsPeriods {...props} />;

