import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box } from "@mui/material";
// components
import useChart from "../useChart";

// ----------------------------------------------------------------------

export default function Volume02() {
  const series = [
    {
      data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    },
  ];

  const chartOptions = useChart({
    chart: {
      type: "bar",
      width: 100,
      height: 35,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "10%",
      },
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  });

  return (
    <Card>
      <CardHeader title={"Chunk"} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={series}
          options={chartOptions}
          // height={364}
        />
      </Box>
    </Card>
  );
}
