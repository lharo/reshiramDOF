import React from "react";
import Chart from "react-google-charts";
import './DataState.json'; 

  
  const chartEvents=[{
      eventName: "ready", // listener en el id?? creo 
      callback: ({ chartWrapper, google }) => {
        const chart = chartWrapper.getChart();
        google.visualization.events.addListener(chart, "select", e => {
          //alert(chart.getSelection()[0].row, )
          if(chart.getSelection()[0].row === 0){
            alert("Baja California y sus leyes son \n .......")
          }else if(chart.getSelection()[0].row === 1){
            alert("Sonora y sus leyes son \n .......")
          }else if(chart.getSelection()[0].row === 2){
            alert("Chihuahua y sus leyes son \n .......")
          }
          else {
            alert(chart.getSelection()[0].row )
          };
        });//mandar id al modal en el id pasarlo al estado con if
      }
    }
    
]

  const data=[
    ['Estado', 'Leyes:'],
    ['Baja California', 100], //0
    ['Sonora', 100], //1
    ['Chihuahua', 100], //2
    ['Coahuila', 100], //3
    ['Nuevo León', 100], //4
    ['Tamaulipas', 100], //5
    ['Sinaloa', 100], //6
    ['Nayarit', 100], //7
    ['Durango', 100], //8
    ['Jalisco', 400], //9
    ['Colima', 400], //10
    ['Tlaxcala', 400], //11
    ['Aguascalientes', 400], //12
    ['Zacatecas', 400], //13
    ['San Luis Potosí', 400],//14
    ['Puebla', 400],//15
    ['Guanajuato', 400],//16
    ['Querétaro', 400],//17
    ['Hidalgo', 400],//18
    ['Morelos', 400],//19
    ['Estado de México', 400],//20
    ['Distrito Federal', 400],//21
    ['Baja California Sur', 200],//22
    ['Michoacán', 200],//23
    ['Guerrero', 200],//24
    ['Oaxaca', 200],//25
    ['Veracruz', 200],//26
    ['Tabasco', 200],//27
    ['Campeche', 300],//28
    ['Chiapas', 200],//29
    ['Quintana Roo', 300],//30
    ['Yucatán', 300],//31
  ];

  const options={
    region: 'MX',
    resolution: 'provinces',
    colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
    backgroundColor: '#FFFFFF',
    datalessRegionColor: '#eeeeee',
    defaultColor: 'white',
  }

const MexiMap = () => {
  return (
    <Chart
    width={'1500px'}
    height={'900px'}
    chartType="GeoChart"
    data={data}
    options={options}
    chartEvents={chartEvents}
  />
  );
};
  
export default MexiMap;
