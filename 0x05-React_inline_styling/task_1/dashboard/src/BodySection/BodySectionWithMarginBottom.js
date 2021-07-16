import React from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from "prop-types";
import BodySection from "./BodySection";

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

const style = StyleSheet.create({
  bodySectionWithMargin: {
  marginBottom: '40px',
  }
})

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={css(style.bodySectionWithMargin)}>
        <BodySection {...this.props}/>
      </div>
    );
  }
}

export default BodySectionWithMarginBottom;
