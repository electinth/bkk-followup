import Header from "components/Header";
import Intro from "components/Intro";

let show_intro = true;
setTimeout(() => {
  show_intro = false;
}, 4000);

export default function Layout(props) {
  return (
    <div>
      <Header />

      {show_intro ? <Intro /> : null}

      <div
        id="main"
        className="fixed inset-0 overflow-hidden"
        style={{ top: "60px" }}
      >
        {props.children}
      </div>
    </div>
  );
}
