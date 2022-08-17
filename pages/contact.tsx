import {ReactElement} from 'react';
import AppLayout from '../components/layouts/app';

const Contact = () => {
  return (
    <div>
      contact
    </div>
  );
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}

export default Contact;