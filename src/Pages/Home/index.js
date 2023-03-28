import {StyleSheet, View, Text} from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Bem vindo ao aplicativo de corrida!</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040316',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 45,
    },
})