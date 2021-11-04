import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ButtonNavigator} from '../components';
import {About, Home, Report, Statistic} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtonNavigator {...props} />}>
     <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
     <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
     
    </Stack.Navigator>
  );
};

export default Router;

// import React from 'react';
// import {
//   createStackNavigator,
// } from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../components';
// import {About, Home, Report, Statistic} from '../pages';
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="Statistic"
//         component={Statistic}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="About"
//         component={About}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Report"
//         component={Report}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// };

// const Router = () => {
//   return (
//     <Stack.Navigator initialRouteName="MainApp">
//       <Stack.Screen
//         name="MainApp"
//         component={MainApp}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// export default Router;
