import React from "react";
import {
  UnorderedListOutlined,
  YahooOutlined,
  RedditOutlined,
} from "@ant-design/icons";

const icons = [UnorderedListOutlined, YahooOutlined, RedditOutlined];

export class AnimateIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }
  componentDidMount() {
    setInterval(() => {
      let current = this.state.current;
      this.setState({
        current: (current + 1) % icons.length,
      });
    }, 1000);
  }
  render() {
    let Icon = icons[this.state.current];
    return (
      <div>
        <Icon></Icon>
      </div>
    );
  }
}
