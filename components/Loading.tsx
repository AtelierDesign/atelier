import Image from 'next/image';
import { spinner } from '/svg/spinner.svg';

export const Loading = () => (
  <div style={{ textAlign: 'center' }}>
    <img src={spinner} height={40} width={40} alt="Loading" />
  </div>
);
