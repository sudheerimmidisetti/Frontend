import React from "react";

import CountUp from "react-countup";
import Tilty from "react-tilty"
import Image from "./assets/react.svg";
import {ToastContainer, toast} from "react-toastify"
import { ClipLoader, RingLoader } from "react-spinners"
export default function ReactComponent() {
  return (
    <>
        <CountUp
            start={0}
            end={1600}
            duration={16}
            separator=" "
            decimals={3}
            decimal=","
            prefix="INR "
            suffix=" left"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
        />

        <Tilty >
            <img className="tiltyImg" src={Image} alt="" />
        </Tilty>

        <button onClick={() => toast("Wow so easy!")}>Notify!</button>
        <ToastContainer />

        <RingLoader
          // style={{ marginLeft:"500px"}}
          size={100}
          speedMultiplier={2}
        />
    </>
  );
}
