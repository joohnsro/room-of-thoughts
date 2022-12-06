import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    task: {
        width: '100%',
        paddingTop: 16,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 12,
        borderRadius: 24,
    },
    active: {
        backgroundColor: '#F2F2F2',
        marginBottom: 12,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
    },
    titleActive: {
        fontWeight: 'bold',
    },
    dot: {
        marginRight: 12,
    },
    hr: {
        width: 60,
        height: 2,
        backgroundColor: '#222222',
        marginVertical: 8,
        marginLeft: 20
    },
    description: {
        marginLeft: 20,
        marginBottom: 12,
        height: 48,
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    button: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,        
        flexDirection: 'row',
        justifyContent: 'center'
    },
    redButton: {        
        backgroundColor: '#E7D6D6',
        marginRight: 8,
    },
    blueButton: {
        backgroundColor: '#DADEE9',
    },
    buttonText: {
        textAlign: 'center',
        marginLeft: 8
    }
});

export default styles;