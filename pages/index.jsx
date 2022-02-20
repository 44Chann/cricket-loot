import Preview from "./componets/left";
import Mainsection from "./componets/right";

export default function Home() {
  return (
    <div className="container">
      <div className="left">
        <Preview />
      </div>
      <div className="right">
        <Mainsection />
      </div>
    </div>
  );
}
