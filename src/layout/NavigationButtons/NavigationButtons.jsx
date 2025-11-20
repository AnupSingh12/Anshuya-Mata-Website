import "./NavigationButtons.css";
import NextButton from "./NavigationbuttonComponents/NextButton.jsx";
import PreviousButton from "./NavigationbuttonComponents/PreviousBUtton.jsx";

export default function NavigationButtons(props) {
  return (
    <>
      {/* Page Navigation */}
      <nav className="intro-paginationNav" data-aos="fade-up">
        <PreviousButton link={props.prevLink} text={props.prevText} />
        <NextButton link={props.nextLink} text={props.nextText} />
      </nav>
    </>
  );
}
