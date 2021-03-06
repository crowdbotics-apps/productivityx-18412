import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile71267Navigator from '../features/UserProfile71267/navigator';
import Tutorial71266Navigator from '../features/Tutorial71266/navigator';
import NotificationList71238Navigator from '../features/NotificationList71238/navigator';
import Settings71237Navigator from '../features/Settings71237/navigator';
import Settings71229Navigator from '../features/Settings71229/navigator';
import UserProfile71227Navigator from '../features/UserProfile71227/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile71267: { screen: UserProfile71267Navigator },
Tutorial71266: { screen: Tutorial71266Navigator },
NotificationList71238: { screen: NotificationList71238Navigator },
Settings71237: { screen: Settings71237Navigator },
Settings71229: { screen: Settings71229Navigator },
UserProfile71227: { screen: UserProfile71227Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
