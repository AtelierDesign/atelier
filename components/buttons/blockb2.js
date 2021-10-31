import { Col, Row, Button } from 'react-bootstrap'


export default function BlockB2({ children, ...props }) {
  return (
<>
<div className="block__button__wrapper">
  <Row className="row__justify__production">
    <Button className="block__button__secondary" as={Col} variant="secondary">
      {children}
    </Button>
  </Row>
  </div>
</>
  );
}
