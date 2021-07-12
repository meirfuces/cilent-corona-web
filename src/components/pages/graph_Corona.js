import React  ,{ useState } from 'react';
import MainHeader from '../Layout/cart/mainHeader';
import { Line } from 'react-chartjs-2';


const Graph_Corona = (props)=>{
  // const dates = {props.dates};
const data = {
    labels: props.dates,
    datasets: [
      {
        label: 'corona death',
        data: props.sicks,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'corona death predict',
        data: props.sicksPredict,
        fill: false,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const [predictJson, setpredictJson] = useState(null);
return (
    <React.Fragment>
       {/* <h1>graph corona</h1> */}
            <Line data={data} options={options} />

</React.Fragment>
);
}

export default Graph_Corona;