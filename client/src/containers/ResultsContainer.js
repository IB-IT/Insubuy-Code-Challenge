import React, { Component } from "react";
import "../styles/insubuyForm.scss";
import ReactTable from "react-table";
import "react-table/react-table.css";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: {},
      selectAll: 0,
      showCompareButton: false,
      showCancelButton: false
    };
  }

  getData = () => {
    fetch("http://localhost:8080/quotes", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        this.setState({
          data: data.quotes
        });
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  toggleRow = id => {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[id] = !this.state.selected[id];
    let selected = [];

    for (let key in newSelected) {
      if (newSelected[key]) {
        selected.push(newSelected);
      }
    }

    if (Object.keys(selected).length >= 2) {
      this.setState({
        showCompareButton: true
      });
    } else {
      this.setState({
        showCompareButton: false
      });
    }

    if (Object.keys(newSelected).length > 4) {
      return false;
    }
    this.setState({
      selected: newSelected,
      selectAll: 2
    });
  };

  compareData = () => {
    let selected = this.state.selected,
      data = this.state.data,
      comparingData = [];

    for (let i = 0; i <= data.length; i++) {
      for (let key in selected) {
        if (data[i] && selected[key] && data[i].id === parseInt(key)) {
          comparingData.push(data[i]);
        }
      }
    }

    this.setState({
      data: comparingData,
      showCancelButton: true
    });
  };

  cancelCompareData = () => {
    this.getData();
    this.setState({
      selected: {},
      showCompareButton: false
    });
  };

  render() {
    const columns = [
      {
        id: "checkbox",
        accessor: "",
        Cell: ({ original }) => {
          return (
            <input
              type="checkbox"
              className="checkbox"
              checked={this.state.selected[original.id] === true}
              onChange={() => this.toggleRow(original.id)}
            />
          );
        },
        sortable: false,
        filterable: false,
        width: 45
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Description",
        accessor: "description",
        sortable: false,
        filterable: false
      },
      {
        Header: "Price",
        accessor: "price"
      },
      {
        Header: "Type",
        accessor: "type",
        sortable: false
      },
      {
        Header: "Section",
        accessor: "section",
        sortable: false
      }
    ];

    return (
      <div className="insubuy-container results">
        <header>
          <h3>Results</h3>
        </header>
        {this.state.showCompareButton && (
          <div className="buttons-wrapper">
            <button
              className="btn btn-orange"
              type="button"
              onClick={this.compareData}
            >
              Compare
            </button>
            <button
              className="btn btn-orange"
              type="button"
              onClick={this.cancelCompareData}
            >
              Cancel
            </button>
          </div>
        )}
        <ReactTable
          data={this.state.data}
          pageSize={10}
          columns={columns}
          filterable
          selectable
        />
      </div>
    );
  }
}

export default ResultsContainer;
