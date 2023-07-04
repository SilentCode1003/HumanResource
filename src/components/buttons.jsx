import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

const ActionBtn = () => {
    return(    
        <>
        <Col>
        <Button variant="outline-danger" href="#">
            Edit
        </Button>
        </Col>
        
        <Col>
        <Button variant="outline-danger" href="#">
            Active
        </Button>
        </Col>
        
        </>
    )
}
export default ActionBtn;