import helloWorld from "../common/commenFunctions";
import "../styles/headerStyle.css";

export default function HeaderComponent() {

    helloWorld();
    return (
        <div className="header_component">
            <h1>This is Header Component for my Application</h1>
        </div>
    )
}