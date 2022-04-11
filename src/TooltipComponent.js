import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Overlay, Tooltip } from "react-bootstrap";

const TooltipComponent = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <>
            <Button ref={target} onClick={() => setShow(!show)}>
                Click me!
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay-id-1" {...props}>
                        Tooltip text here
                    </Tooltip>
                )}
            </Overlay>
        </>
    )
}
export default TooltipComponent;