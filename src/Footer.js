import React, {Component} from 'react';
import PropTypes from "prop-types";

class Footer extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        const {name} = this.props.selectedTheme;
        return (
            <footer className="app-footer">
                <span>{name}</span>
            </footer>
        );
    }
}

Footer.propTypes = {
    selectedTheme: PropTypes.shape({name: PropTypes.string }),
};
export default Footer;