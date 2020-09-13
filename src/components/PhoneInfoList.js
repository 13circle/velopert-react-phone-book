import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined"),
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;

    /**
     *  [Key Allocation]
     *  - Keys must be identical
     *  - Keys must not be varied
     */
    const list = data.map((info) => (
      <PhoneInfo
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
