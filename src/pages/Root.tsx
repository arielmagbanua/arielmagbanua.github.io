import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Root() {
  return (
    <div className="bg-surface dark:bg-surface-dark">
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
