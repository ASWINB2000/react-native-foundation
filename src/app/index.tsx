import {View} from "react-native"
import TextComponent from "../components/TextComponent"
import ViewComponent from "../components/ViewComponent"
import ButtonComponent from "../components/ButtonComponent"
import ImageComponent from "../components/ImageComponent"
import ProfileImageComponent from "../components/ProfileImageComponent"
import InlineStyleComponent from "../components/InlineStyleComponent"
import InternalStyle from "../components/InternalStyle"
import ExternalStyle from "../components/ExternalStyle"

const Index = () => {
    return (
        <View>
            <ProfileImageComponent/>
            <ExternalStyle/>
        </View>
    )
}


export default Index