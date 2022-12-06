import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import dot from "../../assets/dot.png";
import styles from "./styles";

import Task from "../task";

export default function Card({id, title, listImage, data }) {
    const [ expand, setExpand ] = useState(false);

    const handleScrollViewSize = () => {
        setExpand( expand ? false : true );
    }

    return (
        <View style={[styles.card, ! expand ? styles.notExpanded : '']}>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.dots}>
                    <Image source={dot} style={styles.dot} />
                    <Image source={dot} style={styles.dot} />
                    <Image source={dot} style={styles.dot} />
                </View>
            </View>

            <ScrollView
                scrollEnabled={expand}
            >

                { 
                    data && data.length > 0 
                    ? 
                        data.map((task) => (
                            <Task key={task.id} data={{...task, listImage}} />
                        ))
                    : <></>
                }

            </ScrollView>

            <TouchableOpacity 
                style={styles.footer}
                onPress={() => handleScrollViewSize()}
            >
                <Text style={styles.footerText}>
                    { ! expand ? 'Expand to see more' : 'Press to see less' }
                </Text>
            </TouchableOpacity>
        </View>
    )
}