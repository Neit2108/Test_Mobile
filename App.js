import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const insights = [
  { id: '1', title: 'Scan new', count: 'Scanned 483', icon: require('./assets/icons/scan.png'), backgroundColor: '#FFFFFF' },
  { id: '2', title: 'Counterfeits', count: 'Counterfeit 32', icon: require('./assets/icons/warning.png'), backgroundColor: '#F6E3DB' },
  { id: '3', title: 'Success', count: 'Checkouts 8', icon: require('./assets/icons/success.png'), backgroundColor: '#D8F3F1' },
  { id: '4', title: 'Directory', count: 'History 26', icon: require('./assets/icons/calendar.png'), backgroundColor: '#D0EDFB' }
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <View>
            <Text style={{ fontSize: 20, color: '#555', fontWeight: 'bold' }}>Hello 👋🏻,</Text>
            <Text style={{ fontSize: 16}}>Christie Doe</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
            <Image source={require('./assets/icons/homeIcon.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
            
          </View>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text>Your insights</Text>
        </View>

        <FlatList
          data={insights}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingHorizontal : 0 }}
          renderItem={({ item }) => (
            <View style={{ width: 158.16, height: 176.82, margin: 5, padding: 20, backgroundColor: '#F8F8FB', borderRadius: 16, alignItems: 'center' }}>
              <View style={{ width: 55, height: 55, backgroundColor: item.backgroundColor, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.icon} style={{ width: 24, height: 24 }} />
              </View>
              <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{item.title}</Text>
              <Text style={{ color: 'gray' }}>{item.count}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const ScanScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}><Text>Scan Screen</Text></View>;
const ProfileScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Profile</Text></View>;
const CartScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Cart</Text></View>;
const NotifyScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Notifications</Text></View>;
const TimeScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>History</Text></View>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;
            if (route.name === 'Home') icon = require('./assets/icons/homeIcon.png');
            else if (route.name === 'Notify') icon = require('./assets/icons/notifyIcon.png');
            else if (route.name === 'Scan') icon = require('./assets/icons/scanIcon.png');
            else if (route.name === 'Time') icon = require('./assets/icons/timeIcon.png');
            else if (route.name === 'Cart') icon = require('./assets/icons/cartIcon.png');
            return <Image source={icon} style={{ width: 24, height: 24, tintColor: focused ? '#000' : '#ccc' }} />;
          },
          tabBarStyle: { 
            position: 'absolute', 
            width: 375, 
            height: 118, 
            bottom: 0, 
            borderTopLeftRadius: 40, 
            borderTopRightRadius: 40, 
            backgroundColor: 'white' 
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Notify" component={NotifyScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Time" component={TimeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;