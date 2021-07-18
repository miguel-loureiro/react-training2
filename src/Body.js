
import React, {Component} from 'react';
import PropTypes from "prop-types";
import Logo from "./Logo";


class Body extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        const {logoBackground} = this.props.selectedTheme;
        return (
            <div className="app-body">
                <Logo logoBackground={logoBackground} />
            </div>);
    }
}
Body.propTypes = {
    selectedTheme: PropTypes.shape({logoBackground: PropTypes.string}),
};
export default Body;