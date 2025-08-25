import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types"

export default function Button({ size, children, ...props }) {
    return createElement('button', {
        className: classNames("cursor-pointer bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors ", {
            "px-4 h-8 bg-[#eff3f4] hover:bg-[#eff3f4] text-[#0f1419]": size === 'small',
            "px-4 h-9": size === 'normal',
            "px-4 text-[17px] h-[52px] w-full text-[#0f1419] hover:bg-[#eff3f4] bg-[#eff3f4]": size === 'large'
        }

        ), ...props
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    props: PropTypes.object,
}

Button.defaultProps = {
    size: 'normal'
}


