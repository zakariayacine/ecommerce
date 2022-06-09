import '../style/bootstrap.css';
import Navbar from "../components/layouts/navbar";
import Sidenav from '../components/layouts/sidenav';
function Welcome() {
  return (
    <div>
      <Navbar />
      <Sidenav />
    </div>
  );
}
export default Welcome;
