import { useSpinner } from '@/context/spinner/SpinnerContext';
import Spinner from './Spinner';

function GlobalSpinner() {
  const { spinnerImage } = useSpinner();
  return <Spinner imageUrl={spinnerImage} />;
}

export default GlobalSpinner;
