import Navbar from '../Navbar/Navbar';
import './HomeBox.scss';
export default function HomeBox({ children }) {
  return (
    <div className="home">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}
