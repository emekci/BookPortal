import React from 'react'
function Header(props){
    return(
        <div>
            <h4>Welcome to React Transportation</h4>
            <h6>The best place to buy vehicles online</h6>
            <h4>Choose Options</h4>
            <label class="container">New Only
                <input type="checkbox" checked="checked"/>
             </label>
             <select>
                <option value="Cars">Cars</option>
                <option value="Trucks">Trucks</option>
            </select>
        </div>
    )
}

function Vehicle(props){
    return(
        <table>
            <tr>
                <th>Year</th>
                <th>Model</th>
                <th>Price</th>
                <th>Buy</th>
            </tr>
            <tr>
                <td>{props.year}</td>
                <td>{props.model}</td>
                <td>{props.price}</td>
                <td><button type="button">Buy Now</button> </td>
            </tr>
        </table>
    )
}

function Vehicles(props) {
    return(
        <div>
            <h2>{props.typeName}</h2>
            {props.vehicles.map(function(vehicle, i) {
                return <Vehicle key={i} year={vehicle.year} model={vehicle.model} price={vehicle.price} />
            })}
        </div>
    )
}
function TransportationApp(props){
    const data = {
        vehicleTypes:[
        {
            typeName:"Car",
            vehicles: [
                {
                    year:"2013",
                    model:"A",
                    price:"$32000"
                },
                {
                    year:"2011",
                    model:"B",
                    price:"$4400"
                },
                {
                    year:"2016",
                    model:"B",
                    price:"$15500"
                }
            ]
        },
        {
            typeName:"Trucks",
            vehicles:[
                {
                    year:"2014",
                    model:"D",
                    price:"$18000"
                },
                {
                    year:"2013",
                    model:"E",
                    price:"$5200"
                }
            ]
        }
        
        ]
    };
    return(
        
        <div>
            <Header />
            {data.vehicleTypes.map(function(vehicleType, i) {
                return <Vehicles typeName={vehicleType.typeName} vehicles={vehicleType.vehicles} />
            })}
        </div>

    )
}

export default TransportationApp;

//Class Components
class Welcome extends React.component{
    render(){
        return <h1> Hello World</h1>
    }
}

//Life Cycle Methods
Mounting Phase Methods=> constructor(props) -- componenetWillMount()-
 -- render(network request almamalı. for rendering only!!)-- componentDidMount();

 Event Handlers=> onClick--> camel case. fonksiyonlar kıvırcıklara arası yazılır.

 Forms--
 //Controllig Input Fields
 handleChange(event){
     this.setState({value: event.target.value})
 }