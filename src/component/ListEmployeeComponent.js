import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={

            employees: []
        
        }
        this.addEmployee=this.addEmployee.bind(this);
    }
    addEmployee()
    {
     this.props.history.push('/add-employee')   
    }

    componentDidMount()
    {
         EmployeeService.getEmployees().then((res)=>{

            this.setState({employees:res.data});
         });

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered table-dark">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>

                        </thead>
                        <tbody>

                            {
                                this.state.employees.map(


                                    employee=>
                                    <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>

                                    </tr>
                                )
                            }
                        </tbody>

                       
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;