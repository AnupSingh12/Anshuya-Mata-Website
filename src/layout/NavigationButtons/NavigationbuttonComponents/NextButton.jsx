import { Link } from "react-router-dom";

export default function NextButton(Props) {
  return (
    <>
      <Link to={Props.link} className="intro-navButton">
        Next: {Props.text} &rarr;
      </Link>
    </>
  );
}
