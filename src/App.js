import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "Jooho Lee",
        phone: "010-1234-5678",
      },
      {
        id: 1,
        name: "Mato Sakura",
        phone: "070-5882-8282",
      },
    ],
    keyword: "",
  };

  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }),
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) =>
        info.id === id ? { id, ...data } : info
      ),
    });
  };

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      (info) => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>
          <input
            placeholder="Search by Name"
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
