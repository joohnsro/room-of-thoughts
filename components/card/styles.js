import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        width: '100%',
        maxHeight: 600,
        backgroundColor: '#ffffff',
        paddingTop: 24,
        paddingBottom: 8,
        paddingHorizontal: 24,
        marginBottom: 24,
        borderRadius: 36,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
        elevation: 14,
        overflow: 'hidden'
    },
    notExpanded: {
        maxHeight: 280,
    },
    header: {
        paddingHorizontal: 18,
        marginBottom: 24,
    },
    title: {
        fontSize: 40,
    },
    dots: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginTop: 4,
    },
    dot: {
        marginRight: 12,
    },
    footer: {
        paddingVertical: 16,
        backgroundColor: '#ffffff',
        borderTopWidth: 2,
        borderTopColor: '#cdcdcd',
        marginHorizontal: -24,
        marginBottom: -8
    },
    footerText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#cdcdcd'
    },
});

export default styles;