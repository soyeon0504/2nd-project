import React from 'react'
import { ReportTitle } from '../../styles/admin/AdminReportPageStyle'
import { ResponsiveLine } from '@nivo/line';

const getData = {
  data: [
    {
      id: "profit",
      data: [
        {
          x: "2023.08",
          y: 231,
        },
        {
          x: "2023.09",
          y: 90,
        },
        {
          x: "2023.10",
          y: 100,
        },
        {
          x: "2023.11",
          y: 123,
        },
        {
          x: "2023.12",
          y: 67,
        },
        {
          x: "2024.01",
          y: 271,
        },
        {
          x: "2024.02",
          y: 6,
        },
        {
          x: "2024.03",
          y: 82,
        },
      ],
    },
  ],
};

const AdminAdPage = () => {
  const ProfitLine = ({ data }) => (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 25, bottom: 50, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      // yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "수익",
        legendOffset: -50,
        // legendPosition: "end",
      }}
      pointSize={8}
      colors="#C14B45"
      pointColor="#C14B45"
      pointBorderWidth={0}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
      animate={false}
    />
  );
  return (
    <>
    <ReportTitle>
      <h1>전체</h1>
    </ReportTitle>
    <div className='adMain'>
      <div style={{ width: "100%", height: "500px" }}>
        <h2>수익</h2>
        {ProfitLine(getData)}
      </div>
    </div>
    </>
  )
}

export default AdminAdPage