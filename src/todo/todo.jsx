import React from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "https://vni6h.sse.codesandbox.io/api/todos";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      list: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.refresh();
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-createAT${search}`)
      .then(res =>
        this.setState({ ...this.state, description, list: res.data })
      );
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(res => this.refresh());
  }

  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then(res => this.refresh(this.state.description));
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description));
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description));
  }

  handleClear() {
    this.refresh();
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh());
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh());
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
