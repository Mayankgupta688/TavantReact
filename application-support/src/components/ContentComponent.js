import helloWorld from "../common/commenFunctions";
import "../styles/contentStyle.css";

export default function ContentComponent() {
    helloWorld();
    return (
        <div className="content_component">
            <h1>This is Content Component for my Application</h1>
        </div>
    )
}