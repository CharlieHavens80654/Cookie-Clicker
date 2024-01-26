import style from './style';
import React from "react";
class Cookie extends React.Component {
    state = {
      score: 0,
    };
    Add = () => {
      this.setState ({ score: this.state.score + 1 });
    }
    Reset = () => {
      this.setState ({score: 0})
    } 
  
      render() {
    
        return (  
          <div>
            <button style={style.cookie} onClick={this.Add}>
              <img src="https://cdn.discordapp.com/attachments/729502632963473499/1199467432843149322/chocolate-chip-cookie-butter-cookie-cookie-png-5869876d39c1c6e51df3cbfc44b0ac91.png?ex=65c2a619&is=65b03119&hm=e7dedd32561cea991da74b791e94bd835f49def734c0bda47059521c9db55e4a&"/>
            </button>
            <div>
              <font size="10" style={style.label}>
                Cookies = {this.state.score}
              </font>
            </div>
            <button style={style.reset} onClick = {this.Reset}>
              Click to reset cookies
            </button>
          </div>
        );
      }
    }
    
    export default Cookie;