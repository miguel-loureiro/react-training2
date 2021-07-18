import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


const darkTheme = {
  name: "dark",
  backgroundColor: "#282c34",
  color: "#0956f3",
  linkColor: "#61dafb",
  logoBackground: "white",
};

const lightTheme = {
  name: "light",
  backgroundColor: "#0956f3",
  color: "#282c34",
  linkColor: "#61dafb",
  logoBackground: "red",
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTheme: darkTheme,
      availableThemes: [darkTheme,lightTheme],
    };
  }
  selectTheme = (name) => {
      const theme = this.state.availableThemes.find(theme => theme.name === name);
      this.setState({selectedTheme: theme});
  }

  
  render() {
    const {selectedTheme, availableThemes} = this.state;
    const themeNames = availableThemes.map((theme) => theme.name);
    return (
        <div className="app" style={{backgroundColor: selectedTheme.backgroundColor, color: selectedTheme.color}}>
            <Header
                selectedTheme={selectedTheme}
                availableThemeNames={themeNames}
                selectTheme={this.selectTheme}
            />
            <Body selectedTheme={selectedTheme} />
            <Footer selectedTheme={selectedTheme} />
        </div>
    );
  }
}


export default App;
