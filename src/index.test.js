import React from "react";
import { PieChart } from "@amcharts/amcharts4/charts";

import AmCharts4Wrapper from "./index";
import ReactDOM from "react-dom";

class SVGPathElement extends HTMLElement {}

window.SVGPathElement = SVGPathElement;

describe("AmCharts4Wrapper", () => {
  const config = {
    // Create pie series
    series: [
      {
        type: "PieSeries",
        dataFields: {
          value: "litres",
          category: "country"
        }
      }
    ],

    // Add data
    data: [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      },
      {
        country: "Belgium",
        litres: 60
      },
      {
        country: "The Netherlands",
        litres: 50
      }
    ]
  };

  test("Whether it renders", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(
      <AmCharts4Wrapper
        config={config}
        id="amcharts-4"
        chartTypeClass={PieChart}
      />,
      div
    );
  });
});
