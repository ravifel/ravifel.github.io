import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({
    href,
    onClick,
    icon,
    text,
    isExternal = false,
    as = 'a',
    className = 'btn btn-outline-primary d-inline-flex align-items-center',
}) => {
    const commonProps =
        as === 'a'
            ? {
                href,
                target: isExternal ? '_blank' : undefined,
                rel: isExternal ? 'noopener noreferrer' : undefined,
            }
            : { onClick };

    return React.createElement(
        as,
        {
            className,
            ...commonProps,
        },
        <>
            {icon && <span className="me-2">{icon}</span>}
            {text}
        </>
    );
};

CustomButton.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    isExternal: PropTypes.bool,
    as: PropTypes.oneOf(['a', 'button']),
    className: PropTypes.string,
};


export default CustomButton;
