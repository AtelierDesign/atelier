import Image from 'next/image';
import spinner from '../public/svg/spinner.svg';

export const Loading = () => (
  <div style={{ textAlign: 'center' }}>
    <Image src={spinner} height={40} width={40} alt="Loading" />
  </div>
);
