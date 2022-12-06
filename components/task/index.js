import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import imageSaveButton from "../../assets/button-save-image.png";
import imageDiscardButton from "../../assets/button-discard-image.png";
import styles from "./styles.js";

export default function Task({data}) {
    const [ active, setActive ] = useState(false);
    const { id, title, description, listImage } = data;

    const handleActivity = () => {
        setActive( active ? false : true )
    }

    return (
        <View>

            <TouchableOpacity 
                style={[styles.task, active ? styles.active : '']}
                onPress={handleActivity}
            >
                {
                    active
                        ?
                        <>
                            <View style={styles.header}>
                                <Image 
                                    source={listImage}
                                    style={styles.dot}
                                />
                                <Text style={[styles.title, styles.titleActive]}>{title}</Text>
                            </View>
                            
                            <Text style={styles.hr} />

                            <TextInput 
                                placeholder='Description'
                                style={styles.description}
                                value={description}
                            />

                            <View style={styles.footer}>
                                <TouchableOpacity
                                    style={[styles.button, styles.redButton]}
                                >
                                    <Image source={imageDiscardButton} />
                                    <Text style={styles.buttonText}>
                                        Discard
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.button, styles.blueButton]}
                                >
                                    <Image source={imageSaveButton} />
                                    <Text style={styles.buttonText}>Save task</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    :
                        <View style={styles.header}>
                            <Image 
                                source={listImage}
                                style={styles.dot}
                            />
                            <Text style={styles.title}>Get the trash out</Text>
                        </View>
                }

                
            </TouchableOpacity>
        </View>
    );
}