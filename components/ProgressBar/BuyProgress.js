import React from "react";

const barColorMap = [
  "bg-gray-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-indigo-500",
  "bg-teal-500"
];

const filledPercentage = [14, 14, 14, 14, 14, 14, 16];

export default function BuyProgress(props) {
  const levels = [125, 100, 75, 50, 25, 10, 5];
  const calculateCurrentLevel = () => {
    let l = 0;
    let x = props.totalSold;
    while (l < levels.length) {
      x = x - levels[l];
      if (x <= 0) {
        break;
      }
      l++;
    }
    return [l, ((x + levels[l]) / levels[l]) * 100];
  };

  const getBars = (width, color) => {
    return (
      <div
        style={{ width: `${width}%` }}
        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color}`}
      ></div>
    );
  };

  const addBars = () => {
    const [currentLevel, currentLevelFilled] = calculateCurrentLevel();
    let bars = [];
    let x = 0;
    while (x <= currentLevel) {
      if (x == currentLevel) {
        bars.push(
          getBars(
            (currentLevelFilled / 100) * filledPercentage[x],
            barColorMap[x]
          )
        );
      } else {
        bars.push(getBars(filledPercentage[x], barColorMap[x]));
      }
      x++;
    }
    return bars;
  };

  const [pb, setPB] = React.useState([]);

  React.useEffect(() => {
    setPB(addBars());
  }, []);

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
          {pb.map((b) => b)}
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
