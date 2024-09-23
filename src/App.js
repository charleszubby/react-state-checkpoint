import React from "react";
import { Button, Card } from "react-bootstrap";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "I'm John Doe",
        imgSrc: "./web.jpeg",
        profession: "Web Developer",
      },
      show: false,

      timeMounted: null,

      timeElapsed: 0,
    };
  }

  toggleHandler = () => {
    this.setState({ show: !this.state.show });
  };

  //Create a field that shows the time interval since the component was mounted using the component lifecycle methods.
  componentDidMount() {
    this.setState({ timeMounted: new Date() });
    // Set an interval that updates the time elapsed since the component was mounted every second.
    this.timer = setInterval(() => {
      this.updateTimeElapsed();
    }, 1000);
  }

  updateTimeElapsed = () => {
    const { timeMounted } = this.state;
    const currentTime = new Date();
    const difference = Math.floor((currentTime - timeMounted) / 1000);
    console.log(difference);
    this.setState({ timeElapsed: difference });
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // console.log(this.state.timeMounted);
    return (
      <div>
        <Button onClick={this.toggleHandler}>
          {this.state.show ? `Hide Profile` : `Show Profile`}
        </Button>
        {this.state.show && (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text>{this.state.person.bio}</Card.Text>
              <Card.Text>{this.state.person.profession}</Card.Text>
            </Card.Body>
          </Card>
        )}
        <p>
          Time elapsed since the component was mounted: {this.state.timeElapsed}
        </p>
        {/* {this.state.show ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text>{this.state.person.bio}</Card.Text>
              <Card.Text>{this.state.person.profession}</Card.Text>
            </Card.Body>
          </Card>
        ) : null} */}
      </div>
    );
  }
}
export default App;
