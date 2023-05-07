import React from "react"
import { Icon } from "@chakra-ui/react"

const ZoomMeetingIcon = (styles) => {
    return (
        <Icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            {...styles}
        >
            <circle
                cx="24"
                cy="24"
                r="20"
                fill="#2196f3"
            />
            <path
                fill="#fff"
                d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
            />
            <polygon
                fill="#fff"
                points="37,31 31,27 31,21 37,17"
            />
        </Icon>
    )
}

export default ZoomMeetingIcon