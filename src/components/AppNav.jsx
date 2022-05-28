import React, { PureComponent } from "react";
import { withStyles, css, withStylesPropTypes } from "./UI/withStyles";
import Heading from "./UI/Heading";

export const HEIGHT = 50;

class AppNav extends PureComponent {
  render() {
    const { styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <div {...css(styles.container)}>
          <Heading level={3} inverse>
            내 믄서
          </Heading>
        </div>
      </div>
    );
  }
}

AppNav.propTypes = {
  ...withStylesPropTypes,
};

export default withStyles(({ color, depth, unit }) => ({
  wrapper: {
    ...depth.level1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: HEIGHT - 4,
    backgroundColor: color.primary,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: unit * 2,
    paddingRight: unit * 2,
  },
}))(AppNav);
