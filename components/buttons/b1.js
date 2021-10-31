import { Col, Row, Button } from 'react-bootstrap'


export default function B1({ children, ...props }) {
  return (
<>
<div className="button__wrapper">
  <Row className="row__justify__production__small">
    <Button className="button__one" as={Col} variant="primary">
      {children}
    </Button>
  </Row>
  </div>
</>
  );
}