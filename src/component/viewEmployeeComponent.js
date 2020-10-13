import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';


class viewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employee: {}

        }

    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {

            this.setState({
                employee: res.data
            });
        });

    }
    render() {
        return (
            <div>

                
                        
               <div className="card">
                         
                         <div>
                         <img src="../img.jpg" height="180" width="200"/>
                         </div>
                 
                        <h3>{this.state.employee.firstName} {this.state.employee.lastName}</h3>
                        <div>{this.state.employee.emailId}</div>
                        <p>University of Pennsylvania </p>
                        <div>
                        <a href="#" ><i className="fa fa-dribbble"></i></a>
                        <a href="#" style={{marginLeft:"10px"}}><i className="fa fa-twitter"></i></a>
                        <a href="#" style={{marginLeft:"10px"}}><i className="fa fa-linkedin"></i></a>
                        <a href="#" style={{marginLeft:"10px"}}><i className="fa fa-facebook"></i></a>
                        </div>
                        
                    
                </div>

                </div>
        );
    }
}

export default viewEmployeeComponent;