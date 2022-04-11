import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipHoverComponent = () => {
    const toolTipContent = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Tooltip text here
        </Tooltip>
    );
    return (
        <>
            <OverlayTrigger
                placement="right"
                delay={{ show: 200, hide: 400 }}
                overlay={toolTipContent}
            >
                <Button variant="success">Hover to see Tooltip</Button>
            </OverlayTrigger>
        </>
    )
}
export default TooltipHoverComponent;