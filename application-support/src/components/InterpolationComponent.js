import timeFunction from "../common/timeFunction";
import { getName as sampleTime } from "../common/timeFunction";


export default function InterpolationComponent() {
    var userName = "Mayank Gupta";

    function getName() {
        return userName;
    }

    debugger;    

    return (
        <div>
            <h1>Hello { getName() + " " + sampleTime() }...</h1>
            <h2>Current Time is: { timeFunction("Sample Label for Time - ") }</h2>
        </div>
    )
}