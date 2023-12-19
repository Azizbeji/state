import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "bill gates",
        bio: "Bill Gates is one of the richest people in the world. His current net worth sits at a whopping $110 billion according to Forbes Magazine, ensuring that Mr. Gates might not run out of money for the rest of his life. The secret to his wealth is identifying the disruptive potential of a graphical user interface (GUI) used to control a computer. Mr. Gates and Apple Inc. (NASDAQ:AAPL)'s co founder Steve Jobs witnessed GUI in real time, and the rest is history that has seen a mouse or a track pad under everyone's hands.",
        imgSrc:
          "data:image/jpeg;base64,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",
        profession: "Software Engineer",
      },
      shows: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow} className="toggle">
          Toggle Show
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time Interval: {timeInterval} seconds</p>
      </div>
    );
  }
}
export default App;

