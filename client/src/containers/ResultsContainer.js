import React, { Component } from "react";
import "../styles/resultsContainer.scss";
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ResultsContainer extends  Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      selected: {}, 
      selectAll: 0
    }
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
        console.log("Successful" + data);
        this.setState({
          data: data.quotes
        })
      });
    });
  }

  componentDidMount(){
    this.getData();
  }

  toggleRow = (id) => {
		const newSelected = Object.assign({}, this.state.selected);
		newSelected[id] = !this.state.selected[id];
    if(Object.keys(newSelected).length > 4){
      return false;
    }
		this.setState({
			selected: newSelected,
			selectAll: 2
		});
	}

  compareData = () => {
    console.log(this.state.selected);
  }

  render(){

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
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Description',
        accessor: 'description',
        sortable: false,
        filterable: false
      }, {
        Header: 'Price',
        accessor: 'price'
      },{
        Header: 'Type',
        accessor: 'type',
        sortable: false
      },{
        Header: 'Section',
        accessor: 'section',
        sortable: false
      }
    ]

    return (
      <div className="col-md-6">
        <h3> Results Container </h3>
        <button type="button" onClick={this.compareData()}>Compare</button>
        <ReactTable
          data={this.state.data}
          columns={columns}
          filterable
          selectable
        />
        <h3> Results Container </h3>
      </div>
    )
  }
  
}

export default ResultsContainer;
