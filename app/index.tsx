import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProviderDetailScreen from '../screens/home/ProviderDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProviderDetail" component={ProviderDetailScreen} />
      </Stack.Navigator>
  );
}
