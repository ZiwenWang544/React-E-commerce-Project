import { Row} from "react-bootstrap"
import {StoreItem} from "../components/StoreItem/index"
import "../components/StoreItem/index"



export function Store() {

    

    return (
        <>
        <div>
            <h1>NFT STORE</h1>
        </div>
        <Row md={2} xs={1} lg={3} className="g-3">
        <StoreItem/>
        </Row>
        </>
    );
}