import { Col, Row, Button } from 'react-bootstrap'








export default function ButtonComponents({ children, ...props }) {
  return (
<>
<div className="des__container_sm">
  <Row className="row__justify__production">
    <Button className="button__one" as={Col} variant="primary">
      <strong>Ady</strong>®Store
    </Button>
    <Button className="button__two" as={Col} variant="secondary">
      <strong>Ady</strong>®Store
    </Button>
    <Button className="button__three" as={Col} variant="success">
      <strong>Ady</strong>®Store
    </Button>
    <Button className="button__four" as={Col} variant="success">
      <strong>Ady</strong>®Store
    </Button>
  </Row>

  <div className="bump"></div>


    <Button className="block__button" variant="primary" size="lg">
      ATELIER DESIGN YIELD®
    </Button>
    <Button className="block__button__secondary" variant="primary" size="lg">
      ATELIER DESIGN YIELD®
    </Button>

</div>
</>

  );
}
