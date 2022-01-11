import helloWorld from "../common/commenFunctions";
import "../styles/footerStyle.css";

export default function FooterComponent() {
    helloWorld();
    return (
        <div className="footer_component">
            <h1>This is Footer Component for my Application</h1>
        </div>
    )
}