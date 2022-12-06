import { Text, View, Image } from "react-native";

import Logo from "../../assets/logo.png";
import styles from "./styles";

export default function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={Logo} 
                style={styles.logo}
            />
            <Text style={styles.title}>Room of Thoughts</Text>
            <Text style={styles.subtitle}>Don't think, throw in the room</Text>
        </View>
    )
}