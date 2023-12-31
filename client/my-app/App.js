import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoScreen from './src/screens/Onboarding/LogoScreen';
import SignInScreen from './src/screens/Onboarding/SignInScreen';
import SignUpScreen from './src/screens/Onboarding/SignUpScreen';
import WelcomeScreen from './src/screens/Onboarding/WelcomeScreen';
import Home from './src/screens/Home/Home';
import Explore from './src/screens/Explore/Explore';
import Map from './src/screens/Map/Map';
import AI from './src/screens/AI/Ai';
import Favorite from './src/screens/Favorites/List';
import Profil from './src/screens/Profil/Profil';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserContextProvider from './src/context/UserContext';
import InterestScreen from './src/screens/AccountSetUp.jsx/InterestScreen';
import ProfilSetUp from './src/screens/AccountSetUp.jsx/ProfilSetUp';
import AllFilms from './src/components/AllFilms';
import ProfilePolicy from './src/screens/Profil/ProfilePolicy';
import HelpCenter from './src/screens/Profil/HelpCenter';
import EditProfile from './src/screens/Profil/EditProfile';
import ItemFilm from './src/components/ItemFilm';
import Category from './src/components/Category';
import AllComments from './src/components/AllComments';
import HeaderHome from './src/components/HeaderHome';
import Trailer from './src/components/Trailer';
import ChatAdmin from './src/screens/Profil/ChatAdmin';
import UsersInfo from './src/screens/adminTabs/UsersInfo';
import ChatWithUsers from './src/screens/adminTabs/ChatWithUsers';
import ShowAdminChats from './src/components/ShowAdminChats';
import ChatWithUser from './src/screens/adminTabs/ChatWithUser';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <>
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="OnBoardingScreens" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnBoardingScreens" component={OnBoarding} />
            <Stack.Screen name="TabMenu" component={TabMenu} />
            <Stack.Screen name="AdminTabMenu" component={AdminTabMenu} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
}

function OnBoarding() {
  return (
    <>
      <Stack.Navigator initialRouteName="LogoScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={LogoScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="InterestScreen" component={InterestScreen} />
        <Stack.Screen name="ProfilSetUp" component={ProfilSetUp} />
        <Stack.Screen name="AppPolicy" component={ProfilePolicy} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="AllFilms" component={AllFilms} />
        <Stack.Screen name="ItemFilm" component={ItemFilm} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="allcomments" component={AllComments} />
        <Stack.Screen name="HeaderHome" component={HeaderHome}/>
        <Stack.Screen name="Trailer" component={Trailer}/>  
        <Stack.Screen name="ChatAdmin" component={ChatAdmin}/>
        <Stack.Screen name="ShowAdminChats" component={ShowAdminChats}/>
        <Stack.Screen name="ChatWithUser" component={ChatWithUser}/>
      </Stack.Navigator>
    </>
  );
}

const Tab = createBottomTabNavigator();

function TabMenu() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') { iconName = focused ? 'home' : 'home-outline'; }
            else if (route.name === 'Explore') { iconName = focused ? 'analytics-sharp' : 'analytics-outline'; }
            else if (route.name === 'Map') { iconName = focused ? 'map' : 'map-outline'; }
            else if (route.name === 'Favorite') { iconName = focused ? 'list-circle' : 'list-circle-outline'; }
            else if (route.name === 'AI') { iconName = focused ? 'ios-list' : 'ios-list-outline'; }
            else if (route.name === 'Profil') { iconName = focused ? 'person-circle' : 'person-circle-outline'; }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#E21121',
          tabBarInactiveTintColor: 'gray',
        })}
        tabBarStyle={{ backgroundColor: '#181A21' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide the header for the Home screen
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{ headerShown: false }} // Hide the header for the Explore screen
        />
        <Tab.Screen
          name="AI"
          component={AI}
          options={{ headerShown: false }} // Hide the header for the AI screen
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{ headerShown: false }} // Hide the header for the Favorite screen
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }} // Hide the header for the Map screen
        />
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{ headerShown: false }} // Hide the header for the Profil screen
        />
      </Tab.Navigator>
    </>
  );
}


function AdminTabMenu() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'UsersInfo') { iconName = focused ? 'person' : 'person-outline'; }
            else if (route.name === 'ChatWithUsers') { iconName = focused ? 'chatbox' : 'chatbox-outline'; }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#E21121',
          tabBarInactiveTintColor: 'gray',
        })}
        tabBarStyle={{ backgroundColor: '#181A21' }}
      >
        <Tab.Screen
          name="UsersInfo"
          component={UsersInfo}
          options={{ headerShown: false }} // Hide the header for the Home screen
        />
        <Tab.Screen
          name="ChatWithUsers"
          component={ChatWithUsers}
          options={{ headerShown: false }} // Hide the header for the Explore screen
        />
        
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
