import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

const ActionBtn = () => {
    return(    
        <>
        <Col>
        <Button className="w-100" variant="outline-danger" href="#">
            Edit
        </Button>
        </Col>
        
        <Col>
        <Button className="w-100 mt-1" variant="outline-danger" href="#">
            Active
        </Button>
        </Col>
        
        </>
    )
}
export default ActionBtn;