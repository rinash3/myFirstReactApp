import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        score: 0,
        topscore: 0
    };

    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ score: this.state.score + 1 });
    };
    // The render method returns the JSX that should be rendered
    render() {
        return (
            <div className="card text-center">
                <div className="card-header bg-primary text-white">
                    Click Counter!
        </div>
                <div className="card-body">
                    <p className="card-text">Click Count: {this.state.count}</p>
                    <button className="btn btn-primary" onClick={this.handleIncrement}>
                        Increment
          </button>{" "}
                </div>
            </div>
        );
    }
}

export default score;