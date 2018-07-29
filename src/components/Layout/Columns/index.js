import React from 'react';
import PropTypes from 'prop-types';
import FocusableComponent from '../FocusableElement';
import './style.css';

const Rows = ({
    id,
    children,
    navigationUp: parentNavigationUp,
    navigationDown: parentNavigationDown,
    navigationLeft: parentNavigationLeft,
    navigationRight: parentNavigationRight,
    focusedIndex
}) => {
    const amountOfChildren = children.length;
    let refs = Array(amountOfChildren).fill().map(() => React.createRef());

    return <div class="focusable-columns-container">
        {children.map((child, index) => (
            <FocusableComponent
                id={`${id}-${index}`}
                ref={refs[index]}
                navigationUp={parentNavigationUp}
                navigationDown={parentNavigationDown}
                navigationLeft={index > 0
                    ? refs[index - 1]
                    : parentNavigationLeft
                }
                navigationRight={index < amountOfChildren - 1
                    ? refs[index + 1]
                    : parentNavigationRight
                }
                hasDefaultFocus={focusedIndex === index}
            >
                {child}
            </FocusableComponent>
        ))}
    </div>;
};

Rows.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
    navigationUp: PropTypes.node,
    navigationDown: PropTypes.node,
    navigationLeft: PropTypes.node,
    navigationRight: PropTypes.node,
    focusedIndex: PropTypes.number
};

Rows.defaultProps = {
    children: [],
    navigationUp: null,
    navigationDown: null,
    navigationLeft: null,
    navigationRight: null,
    focusedIndex: -1
};

export default Rows;