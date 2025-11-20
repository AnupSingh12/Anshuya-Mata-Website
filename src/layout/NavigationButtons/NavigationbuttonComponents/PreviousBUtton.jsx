import { Link } from "react-router-dom";

export default function PreviousButton(Props) {
  return (
    <>
      <Link to={Props.link} className="intro-navButton intro-prev">
        &larr; Back to {Props.text}
      </Link>
    </>
  );
}
