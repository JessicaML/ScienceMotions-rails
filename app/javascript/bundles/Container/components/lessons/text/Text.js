import React from "react";

const Text = ({props}) => (
  <section id="text">
    {console.log('props', props)}

    {/* <div>{props.props.description}</div>
    <div dangerouslySetInnerHTML={createMarkup()} /> */}
    <div dangerouslySetInnerHTML={{__html: props}} />
  </section>
);

export default Text;