import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "$NAME",
      phone: "010-0000-0000",
      id: 0,
    },
  };

  state = {
    // If an edit button is clicked, editing = true.
    // If editing === true, change plaintext values to <input>.
    editing: false,

    // <input> values are fluent, so each <input> values
    // must be defined as fields.
    name: "",
    phone: "",
  };

  handleRemove = () => {
    // If a delete button is clicked,
    // call onRemove by passing the id.
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  // Toggles this.state.editing value.
  // Thus, true -> false & false -> true.
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  // <input> onChange event function
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  shouldComponentUpdate(nextProps, nextState) {
    // If it is not EDIT mode & has same info, abort re-rendering.
    if (
      !this.state.editing &&
      !nextState.editing &&
      nextProps.info === this.props.info
    ) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    /**
     *  [ "editing" mode logic ]
     *
     *  1. If EDIT is clicked
     *     >> Its values shown in <input>
     *  2. If SAVE is clicked
     *     >> Pass values in <input> to its parent (App)
     */
    const { info, onUpdate } = this.props;

    // editing === false -> true
    // Set values in info(original values) to the state
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }

    // eiditing === true -> false
    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    }
  }

  render() {
    const { editing } = this.state;

    // Edit mode
    if (editing) {
      return (
        <div className="phoneinfo-container">
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="Phone"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>SAVE</button>
          <button onClick={this.handleRemove}>DELETE</button>
        </div>
      );
    }

    // List mode
    const { name, phone } = this.props.info;
    return (
      <div className="phoneinfo-container">
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>EDIT</button>
        <button onClick={this.handleRemove}>DELETE</button>
      </div>
    );
  }
}

export default PhoneInfo;
