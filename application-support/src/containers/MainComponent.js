import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import ContentComponent from "../components/ContentComponent"


export default function MainComponent() {
    return (
        <div>
            <h1>This is Main Component for Application....</h1><hr/>
            <HeaderComponent></HeaderComponent><hr/>
            <ContentComponent></ContentComponent><hr/>
            <FooterComponent></FooterComponent>
        </div>
    )
}

