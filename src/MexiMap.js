import Chart from "react-google-charts";
import Modal from "./Components/Modal";
import data from "./Data/data";
import './DataState.json'; 
import { getNombreEstadoById } from "./Estados/EstadosFunctions";
import React, { useState } from "react";



  
  const chartEvents=[{
      eventName: "ready",
      callback: ({ chartWrapper, google }) => {
        const chart = chartWrapper.getChart();
        google.visualization.events.addListener(chart, "select", e => {
          const id = chart.getSelection()[0].row;
          const name = getNombreEstadoById( id );
          
          alert(`You clicked on ${ name }`)

        });
      }
    }
  ]


  const options={
    region: 'MX',
    resolution: 'provinces',
    colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
    backgroundColor: '#FFFFFF',
    datalessRegionColor: '#eeeeee',
    defaultColor: 'white',
  
  }

const MexiMap = () => {
  const [isModalOpen, toggleModal] = useState(false);
  return (
    <>
      <div id="modal"></div>

      <Chart
      width={'2000px'}
      height={'900px'}
      chartType="GeoChart"
      data={data}
      options={options}
      chartEvents={chartEvents}
     />
     <button onClick={() => toggleModal(!isModalOpen)}>Open</button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <h1>{chartEvents.name}</h1>
        <p>fake data .....</p>
        <button onClick={() => toggleModal(false)}>Close</button>
      </Modal>
  </>
  );
};

  
export default MexiMap;
