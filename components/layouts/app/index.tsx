import Footer from './Footer';
import Navbar from './Navbar';

const AppLayout = (props: {
  children: any
}) => {
  return (
    <div className={'app-layout'}>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default AppLayout;