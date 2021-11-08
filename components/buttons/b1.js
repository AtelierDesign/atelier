import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Link from 'next/link';


export default function B1({ children, ...props }) {
  return (
<>
<div className="button__wrapper">
  <Button variant="primary" size="sm">
  <Link href="/new">
  <a>Shop All Products</a>
  </Link>
    </Button>
  </div>
</>
  );
}
