import React from "react";
import PropTypes from 'prop-types'
const Icon = props => {
    const styles = {
        img: {
            width: "60px",
            height: "60px",
            backgroundColor: "#f9f9f9"
        }
    };
    return <img style={styles.img} src={props.icon} />;
};

Icon.propTypes = {
    size: PropTypes.string,
    icon: PropTypes.string.isRequired
};

Icon.defaultProps = {
    size: "32"
};

export default Icon;