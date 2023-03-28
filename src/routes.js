import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Pages/Home'
import Calc1 from './Pages/Calc1'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator
        screenOptions = {{
            tabBarActiveTintColor: '#eaf78c',
            tabBarActiveBackgroundColor: '#130F39',
            tabBarItemStyle:{
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                padding: 3,
            },
            tabBarStyle: {
                position: 'relative',
                backgroundColor: '#070615',
                borderTopWidth: 0,
                height: 60,            
            },
            tabBarLabelStyle: {
                fontSize: 15,
            },
        }}>

            <Tab.Screen name= "Início" 
            component= {Home} 
            options= {{
                headerShown: false,
            }}/>

            <Tab.Screen name= "Pace Estimado" 
            component= {Calc1}
            options= {{
                headerShown: false,
            }}/>
        </Tab.Navigator>
    )
}