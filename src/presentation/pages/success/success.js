import { postRequest } from '../../../data/data-source/remote/apiCall';
import { SIGNUP } from '../../../data/data-source/remote/apiList';

function Success() {
  return (
    <div className="body">
      <p className="headline">Success.</p>
      <p className="bodyText">
        A verification link has been sent to your email address. Please{' '}
        <span>verify to continue.</span>
      </p>
      <p style={{ color: '#FF7272', fontSize: '14px' }} className="bodyText">
        Note: Check your spam folder.
      </p>
    </div>
  );
}

export default Success;
