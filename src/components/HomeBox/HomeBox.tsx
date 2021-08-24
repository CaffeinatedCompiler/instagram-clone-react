import { ReactElement } from 'react';
import Navbar from '../Navbar/Navbar';
import './HomeBox.scss';
export default function HomeBox({ children }: { children: ReactElement }) {
  return (
    <div className="home">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}
