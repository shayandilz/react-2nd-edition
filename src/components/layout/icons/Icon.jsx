import React from "react";
import PropTypes from 'prop-types'
const Icon = props => {
    const styles = {
        img: {
            width: "40px",
            height: "40px",
            textAlign: "center",
            marginLeft: "15px",
            marginTop: "8px"
            
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