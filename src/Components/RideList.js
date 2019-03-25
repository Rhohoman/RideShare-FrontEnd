import React from "react"
import Ride from "./Ride.js"

const RideList = (props) => {
  const renderRide=()=>{
    if(props.rides){
      return props.rides.map((ride,key)=>
        <Ride
          key={key}
          idx={key+1}
          ride={ride}
        />)
    }
  }
  return (
  <div className="">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Distance</th>
          <th scope="col">Started At</th>
          <th scope="col">Ended At</th>
          <th scope="col">Price</th>
          <th scope="col">Starting Location</th>
          <th scope="col">Ending Location</th>
        </tr>
      </thead>
      <tbody>
        {renderRide()}
      </tbody>
    </table>

  </div>
  )
}

export default RideList