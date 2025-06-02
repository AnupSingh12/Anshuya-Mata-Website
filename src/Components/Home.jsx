import "../Styling/Home.css"
import { Link } from "react-router-dom";


function Home(){
    return(
        <div className="App">
     <div className="introduction">
      <h1 className="heading">Shri Ansuya Mandir Trust Committee</h1>
      <h2 className="heading">P.O. Chamoli District, Uttarakhand</h2>
      <p>Registered under Society Registration Act</p>
      <p>Registration Certificate No: 71/61-62</p>
     </div>

     <Link  to="../pages/english_pages/introduction_e_pages"><button  class="btn btn-outline-primary">English</button> </Link>
     <Link to="../pages/hindi_pages/introduction_page"><button  class="btn btn-outline-primary">हिन्दी</button> </Link>
       
     </div>
    )
}

export default Home;