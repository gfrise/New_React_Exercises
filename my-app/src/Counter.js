import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    componentDidMount() {
        setInterval(() => {
          this.setState((state) => {
            return {
              count: state.count + this.props.increment,
            }
          })
        }, this.props.interval)
    }

    render () {
        return (
            <>
             <CounterDisplay count={this.state.count}/>
             <ClickCounter />
             <ClickTracker />
            </> 
        )
    }
}