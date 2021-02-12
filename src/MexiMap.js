import React, { useState } from "react";
import Chart from "react-google-charts";
import data from "./Data/data";
import './DataState.json'; 
import { getNombreEstadoById } from "./Estados/EstadosFunctions";
import CustomModal from './Components/CustomModal'

const MexiMap = () => {

  const [stateName, setStateName] = useState('');
  const [shouldShow, setShouldShow] = useState(false);

    const chartEvents=[{
      eventName: "ready",
      callback: ({ chartWrapper, google }) => {
        const chart = chartWrapper.getChart();
        google.visualization.events.addListener(chart, "select", e => {
          const id = chart.getSelection()[0].row;
          const name = getNombreEstadoById( id );
          setStateName(name);
          setShouldShow(true);
          setShouldShow(false);
        });
      }
    }]

  const options={
    region: 'MX',
    resolution: 'provinces',
    colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
    backgroundColor: '#FFFFFF',
    datalessRegionColor: '#eeeeee',
    defaultColor: 'white',
  }  

  return (
    <>
      <Chart
        width={'1500px'}
        height={'900px'}
        chartType="GeoChart"
        data={data}
        options={options}
        chartEvents={chartEvents}
      />

    <CustomModal name = { stateName } showModal = { shouldShow }/>

  </>
  );
};
  
export default MexiMap;
