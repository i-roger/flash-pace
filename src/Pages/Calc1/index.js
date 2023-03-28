import React, {useState} from 'react'
import {StyleSheet, 
        Text, 
        TextInput, 
        KeyboardAvoidingView, 
        Platform, 
        View, 
        TouchableOpacity, 
        TouchableWithoutFeedback, 
        Keyboard} from 'react-native'

export default function Calc1() {

    //CALCULO MATEMATICO DO PACE
    const [distancia, setDistancia] = useState(parseFloat)
    const [horas, setHoras] = useState('', parseFloat)
    const [minutos, setMinutos] = useState('', parseFloat)
    const [segundos, setSegundos] = useState('', parseFloat)
    const [resultado, setResultado] = useState(String)

    function Calcular() {
        const minutosTotais = (horas * 60) + parseInt(minutos) + (segundos / 60)
        const pace = minutosTotais / distancia
        const paceMinutes = Math.floor(pace)
        const paceSeconds = Math.round((pace - paceMinutes) * 60)

        if(paceSeconds < 10) {
            paceSeconds == "0" + paceSeconds
        }
        
        setResultado(paceMinutes + `'` + paceSeconds + `''`)

    }
    //CALCULO MATEMATICO DO PACE
    

    return (
        <TouchableWithoutFeedback
        onPress={()=>{
            Keyboard.dismiss()
        }}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <Text style={{
                    fontSize: 40,
                    color: '#fff',
                    paddingBottom: 50,
                }}>Pace Estimado</Text>

                <Text style={styles.text}>Distância</Text>
                <TextInput 
                color= '#fff'
                keyboardType='numeric' 
                style={{width: 150,
                    marginBottom: 20, 
                    fontSize: 30,
                    textAlign: 'center',
                    borderColor: '#fff', 
                    borderStyle: 'solid',
                    borderWidth: 2,
                    borderRadius: 5,
                }}
                onChangeText={text=>setDistancia(text.replace(/([0-9]{2})([0-9])/g, '$1.$2'))}
                maxLength={5}
                value={distancia}
                placeholder='--,--'
                placeholderTextColor='#fff'
                ></TextInput>


                <View style={styles.tempo_container}>
                <View style={styles.input_container}>
                    <Text style={styles.text}>Horas</Text>
                    <TextInput 
                    color= '#fff'
                    keyboardType='numeric' 
                    style={styles.textInput}
                    onChangeText={text=>setHoras(text.replace(/[^0-9]/g, ''))}
                    maxLength={2}
                    value={horas}
                    placeholder='00'
                    placeholderTextColor='#fff'/>
                </View>

                <View style={styles.input_container}>
                    <Text style={styles.text}>Minutos</Text>
                    <TextInput 
                    color= '#fff'
                    keyboardType='numeric' 
                    style={styles.textInput}
                    onChangeText={text=>setMinutos(text.replace(/[^0-9]/g, ''))}
                    maxLength={2}
                    value={minutos}
                    placeholder='00'
                    placeholderTextColor='#fff'/>
                </View>

                <View style={styles.input_container}>
                    <Text style={styles.text}>Segundos</Text>
                    <TextInput 
                    color= '#fff'
                    keyboardType='numeric' 
                    style={styles.textInput}
                    onChangeText={text=>setSegundos(text.replace(/[^0-9]/g, ''))}
                    maxLength={2}
                    value={segundos}
                    placeholder='00'
                    placeholderTextColor='#fff'/>
                    
                </View>
                </View>


                <TouchableOpacity
                style={styles.btn}
                title="Calcular"
                onPress={Calcular}
                onPressIn={Keyboard.dismiss}>
                    <Text style={styles.btn_text}>Calcular</Text>
                </TouchableOpacity>

                {/* BOTAO DE COPIAR
                <TouchableOpacity
                style={styles.btn}
                title="Copiar"
                onPress=''>
                    <Text style={styles.btn_text}>Copiar</Text>
                </TouchableOpacity>
                */}

                <View style={{backgroundColor: '#a51818', width: '100%'}}>
                <Text style={{textAlign: 'center', margin: 0, backgroundColor: '#a51818', color: '#eaf78c', fontSize: 40}}>
                    {resultado}
                </Text>
                </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#040316',
    },
    tempo_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
    },
    input_container: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        paddingBottom: 10,
        
    },
    
    textInput: {
        width: 100,
        height: 50,
        marginBottom: 20, 
        fontSize: 30,
        textAlign: 'center',
        borderColor: '#fff', 
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        
    },
    btn: {
        marginBottom: 20,
        elevation: 8,
        paddingVertical: 20,
        paddingHorizontal: 42,
        backgroundColor: '#a51818',
        borderRadius: 5,
    },
    btn_text: {
        color: '#eaf78c',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

})
