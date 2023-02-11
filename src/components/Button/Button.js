import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { PropTypes } from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    primary = false,
    rounded = false,
    text = false,
    outline = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    LeftIcon,
    RightIcon,
    ...otherProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...otherProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            let isEventListener = key.startsWith('on') && typeof props[key] === 'function';
            if (isEventListener) {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        text,
        primary,
        outline,
        rounded,
        disabled,
        small,
        large,
        [className]: className,
    });

    return (
        <Component className={classes} {...props}>
            {LeftIcon && <LeftIcon className={cx('icon')} />}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <RightIcon className={cx('icon')} />}
        </Component>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    LeftIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    RightIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Button;
