import { Col, Row, Button } from 'react-bootstrap'


export default function BlockB1({ children, ...props }) {
  return (
<>
<div className="block__button__wrapper">
  <Row className="row__justify__production">
    <Button className="block__button" as={Col} variant="primary">
      {children}
    </Button>
  </Row>
  </div>
</>
  );
}
