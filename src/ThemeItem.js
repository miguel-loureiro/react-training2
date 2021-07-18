import React, {Component} from 'react';
import PropTypes from "prop-types";


class ThemeItem extends Component {
  constructor(props) {
    super(props)
  }
  select = (name) => {
     this.props.select(name);
  }

  render() {
    const {selectedTheme, themeName} = this.props;
    return (
        <button style={{color: selectedTheme.linkColor}} 
                onClick={()=>this.select(themeName)}>
            {themeName}
        </button>
    );
  }
}

ThemeItem.propTypes = {
    selectedTheme: PropTypes.shape({ linkColor: PropTypes.string }).isRequired,
    themeName: PropTypes.string.isRequired,
    select: PropTypes.func.isRequired,
};
export default ThemeItem;
