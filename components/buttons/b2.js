import { Col, Row } from 'react-bootstrap'


export default function B2({ children, ...props }) {
  return (
<>
<div className="button__wrapper">
  <Row className="row__justify__production__small">
    <button type="button" className="btn btn-primary btn-sm">{children}</button>
  </Row>
  </div>
</>
  );
}
