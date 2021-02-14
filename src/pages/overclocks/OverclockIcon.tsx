import { Overclock } from "./data";
import icons from "assets/overclocks/icons";
import frames from "assets/overclocks/frames";
import { useEffect, useState } from "react";

export default function OverclockIcon(props: { overclock: Overclock }) {
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState<{ icon: string; frame: string } | null>(
    null
  );
  const { type: frameName, icon: iconName } = props.overclock;
  useEffect(() => {
    Promise.all([frames[frameName], icons[iconName]])
      .then(([frame, icon]) => {
        setAssets({ frame: frame.default, icon: icon.default });
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, [frameName, iconName]);

  if (isLoading || assets === null) {
    return <p>loading</p>;
  }

  return (
    <div
      style={{
        position: "relative",
        height: 100,
        width: 100,
        margin: "auto",
        marginTop: 16,
      }}
    >
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <img src={assets.frame} alt={frameName} />
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -5${frameName === "clean" ? 7 : 0}%)`,
            top: "50%",
            left: "50%",
          }}
        >
          <img src={assets.icon} alt={iconName} />
        </div>
      </div>
    </div>
  );
}
