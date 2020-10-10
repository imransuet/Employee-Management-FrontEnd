import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

    }

    
    render() {
        return (
            <div>

                <footer className="footer">
                 <span className="text-muted">All Rights Reserved 2020 SRB Corporation</span>
                </footer>

            </div>
        );
    }
}


export default FooterComponent;