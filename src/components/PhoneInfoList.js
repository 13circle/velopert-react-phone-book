import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
  };

  render() {
    const { data } = this.props;

    /**
     *  [Key Allocation]
     *  - Keys must be identical
     *  - Keys must not be varied
     */
    const list = data.map((info) => <PhoneInfo key={info.id} info={info} />);

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
