import FooterEnglish from "../../layout/Footer/FooterEnglish.jsx";
import NavbarEnglish from "../../layout/Navbar/NavbarEnglish.jsx";
import NavigationButtons from "../../layout/NavigationButtons/NavigationButtons.jsx";
import "../../Styling/Donation.css";

function Donation() {
  return (
    <>
      <NavbarEnglish />
      <div>
        <section className="donation-new-wrapper">
          <div className="donation-new-hero">
            <h1 className="donation-new-heading">🙏 Jai Mata Ansuya</h1>
            <p className="donation-new-message">
              We are deeply grateful for your willingness to support the Shri
              Ansuya Mandir. <br />
              Your donation helps us preserve sacred traditions, serve devotees,
              and maintain the serenity and spirit of our temple. <br />
              Every contribution you make is a blessing that brings divine light
              into countless lives. Thank you for walking this sacred path with
              us.
            </p>
          </div>

          <div className="donation-new-bank">
            <h2 className="bank-title">Temple Donation Bank Details</h2>
            <div className="bank-card">
              <p>
                <strong>Account Name:</strong> Shri Ansuya Mandir Trust
                Committee
              </p>
              <p>
                <strong>Branch Name:</strong> Uttarakhand Gramin Bank, Mandal
              </p>
              <p>
                <strong>Account Number:</strong> 4253029920
              </p>
              <p>
                <strong>IFSC Code:</strong> SBIN0RRUTGB
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Wrapper added to provide continuous background for navigation buttons */}
      <div className="nav-buttons-donation">
        <NavigationButtons
          prevLink="/AnnualFairEnglish"
          prevText="Annual Fair"
          nextLink="/WebsiteDevelopMentEnglish"
          nextText="Website Development"
        />
      </div>
      <FooterEnglish />
    </>
  );
}

export default Donation;
