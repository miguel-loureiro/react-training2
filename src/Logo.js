import React, {Component} from 'react';
import PropTypes from "prop-types";
import logo from "./logo.svg";


class Logo extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        const {logoBackground} = this.props;
        return (
            <img src={logo} className="app-logo" alt="logo" style={{backgroundColor: logoBackground }} />
            );
    }
}

Logo.propTypes = {
    logoBackground: PropTypes.string.isRequired,
};
export default Logo;