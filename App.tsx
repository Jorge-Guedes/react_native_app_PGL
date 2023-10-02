import { NavigationContainer as NavCon } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/screens/Home";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { colors } from "./src/utils/colors";
import { Beers } from "./src/screens/Beers";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavCon>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarStyle: {
              borderColor: colors.black,
              height: 50,
              backgroundColor: colors.darkGreen,
            },
            tabBarLabelStyle: {
              color: colors.lightGray,
              fontSize: 12,
            },
            tabBarLabel: "Home",
            tabBarIcon: () => <Icons name="home" size={40} color={colors.lightGray} />,
          }}
        />

        <Tab.Screen
          name="Cervezas"
          component={Beers}
          options={{
            tabBarStyle: {
              borderColor: "red",
              height: 50,
              backgroundColor: colors.darkGreen,
            },
            tabBarLabelStyle: {
              color: colors.lightGray,
              fontSize: 12,
            },
            tabBarLabel: "Cervezas",
            tabBarIcon: () => <Icons name="beer" size={40} color={colors.gold} />,
            tabBarBadge:"5",
          }}
        />
      </Tab.Navigator>
    </NavCon>
  );
}
