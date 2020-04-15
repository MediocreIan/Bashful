import React from "react";

export default class OutputPageMain extends React.Component {
  state = {
    code: "",
  };

  componentDidMount() {
    const { scriptId } = this.props.match.params;
    fetch(`http://localhost:8000/output/${scriptId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ code: data });
      });
  }

  render() {
    return (
      <div>
        <h3>your script</h3>
        <div class="output_box">
          <pre>
            <code id="output_text">{this.state.code}</code>
          </pre>
        </div>
        <form action="">
          <label for="os">select your operating system</label>
          <select name="os" id="os_select">
            <option value="linux">Linux</option>
            <option value="mac">MacOs</option>
            <option value="windows">Windows</option>
          </select>
        </form>
        <div id="instructions_box">
          <h4>custom instructions based on os</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    );
  }
}