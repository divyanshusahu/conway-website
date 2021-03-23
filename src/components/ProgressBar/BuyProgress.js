import React, { Component } from "react";

const barColorMap = [
  "bg-gray-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-indigo-500",
  "bg-teal-500",
];

const filledPercentage = [14, 14, 14, 14, 14, 14, 16];
const levels = [125, 100, 75, 50, 25, 10, 5];

class BuyProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pb: [],
    };

    this.calculateCurrentLevel = this.calculateCurrentLevel.bind(this);
    this.getBars = this.getBars.bind(this);
    this.addBars = this.addBars.bind(this);
  }

  calculateCurrentLevel(x) {
    let l = 0;
    // let x = totalMinted;
    while (l < levels.length) {
      x = x - levels[l];
      if (x <= 0) {
        break;
      }
      l++;
    }
    return [l, ((x + levels[l]) / levels[l]) * 100];
  }

  getBars(width, color) {
    return (
      <div
        style={{ width: `${width}%` }}
        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color}`}
      ></div>
    );
  }

  addBars(totalMinted) {
    const [currentLevel, currentLevelFilled] = this.calculateCurrentLevel(
      totalMinted
    );
    let bars = [];
    let x = 0;
    while (x <= currentLevel) {
      if (x === currentLevel) {
        bars.push(
          this.getBars(
            (currentLevelFilled / 100) * filledPercentage[x],
            barColorMap[x]
          )
        );
      } else {
        bars.push(this.getBars(filledPercentage[x], barColorMap[x]));
      }
      x++;
    }
    return bars;
  }
  componentWillReceiveProps(p) {
    this.setState({ pb: this.addBars(p.totalMinted) });
  }
  // componentDidMount() {
  //   this.setState({ pb: this.addBars(this.props.totalMinted) });
  // }

  render() {
    return (
      <>
        <div className="relative pt-1 flex">
          <span className="text-xs" style={{ width: "14%" }}>
            125 NFTs
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            100 NFTs
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            75 NFTs
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            50 NFTs
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            25 NFTs
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            10 NFTs
          </span>
          <span className="text-xs" style={{ width: "16%" }}>
            5 NFTs
          </span>
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            {this.state.pb.map((b) => b)}
          </div>
        </div>
        <div className="relative pt-1 flex">
          <span className="text-xs" style={{ width: "14%" }}>
            0.6 BNB
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            1.2 BNB
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            1.8 BNB
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            2.5 BNB
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            3.5 BNB
          </span>
          <span className="text-xs" style={{ width: "14%" }}>
            5 BNB
          </span>
          <span className="text-xs" style={{ width: "16%" }}>
            10 BNB
          </span>
        </div>
      </>
    );
  }
}

export default BuyProgress;
