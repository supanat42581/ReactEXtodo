import React from "react";

export default class ToDoList extends React.Component {
  state = {
    data: [],
    text: "",
    textEdit: ""
  };

  changeText = (event) => {
    let newText = event.target.value;
    this.setState({ text: newText });
  };

  addData = (event) => {
    event.preventDefault();
    let newData = [...this.state.data, [this.state.text, false, false]];
    this.setState({ data: newData, text: "" });
  };

  delete = (event, index) => {
    let deleteNum = [...this.state.data];
    deleteNum.splice(index, 1);
    this.setState({ data: deleteNum });
  };

  toggle = (event, index) => {
    if (this.state.data[index][1] === false) {
      let toggleNum = [...this.state.data[index]];
      toggleNum.splice(1, 1, true);
      let NewData = [...this.state.data];
      NewData.splice(index, 1, toggleNum);
      this.setState({ data: NewData });
    } else {
      let toggleNum = [...this.state.data[index]];
      toggleNum.splice(1, 1, false);
      let NewData = [...this.state.data];
      NewData.splice(index, 1, toggleNum);
      this.setState({ data: NewData });
    }
  };


  edit = (index) => {
    if (this.state.data[index][2] === false) {
      let editText = [...this.state.data]
      editText = editText.map((item, idx) => idx == index ? [item[0], item[1], true] : item)
      this.setState({ data: editText })
    } else {
      let editText = [...this.state.data]
      editText = editText.map((item, idx) => idx == index ? [item[0], item[1], false] : item)
      this.setState({ data: editText })
    }
  }


submitEdit = (event, index) => {
  event.preventDefault()
  let submitArr = [...this.state.data]
  submitArr = submitArr.map((item, idx) => idx == index? [this.state.textEdit, item[1], false] : item)
  this.setState({data : submitArr, textEdit:""})


}



  render() {
    return (
      <div>
        <form onSubmit={(event) => this.addData(event)}>
          <input
            type="text"
            onChange={(event) => this.changeText(event)}
            value={this.state.text}
          />
        </form>
        <ul>
          {this.state.data.map((item, index) => (
            <div>
              <button onClick={(event) => this.toggle(event, index)}>
                {this.state.data[index][1] ? "done" : "will"}
              </button>
              <li key={index} style={{ textDecoration: this.state.data[index][1] ? "line-through" : "none" }}>{item}</li>
              <button onClick={(event) => this.delete(event, index)}>X</button>
              <button onClick={() => this.edit(index)}>edit</button>
              {this.state.data[index][2] ? <form onSubmit={(event)=> this.submitEdit(event, index)}><input value={this.state.textEdit} onChange={(event)=> this.setState({textEdit: event.target.value}) } type="text"></input></form>: null}

            </div>
          ))}
        </ul>
      </div>
    );
  }
}
