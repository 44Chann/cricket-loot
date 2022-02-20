import Preview from "./componets/preview";
import Mainsection from "./componets/mainsection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="left">
          <Preview />
        </div>
        <div className="right">
          <Mainsection />
        </div>
      </div>
    </>
  );
}
