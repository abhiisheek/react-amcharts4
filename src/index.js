import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import * as am4core from "@amcharts/amcharts4/core";
import am4themesAnimated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themesAnimated);

class AmChart4Wrapper extends PureComponent {
  constructor(props) {
    super(props);

    const { id } = props;

    this.id = `__amcharts4_${id}_${Date.now()}__`;
  }

  componentDidMount() {
    const { chartTypeClass, config } = this.props;

    this.chart = am4core.createFromConfig(config, this.id, chartTypeClass);
  }

  componentDidUpdate(prevProps) {
    const { chartTypeClass, config } = this.props;

    if (config !== prevProps.config) {
      this.chart.dispose();

      this.chart = am4core.createFromConfig(config, this.id, chartTypeClass);
    }
  }

  render() {
    return <div id={this.id} style={{ width: "100%", height: "100%" }} />;
  }
}

AmChart4Wrapper.propTypes = {
  config: PropTypes.object.isRequired,
  chartTypeClass: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default AmChart4Wrapper;
