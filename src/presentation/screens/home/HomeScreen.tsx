/* eslint-disable react-native/no-inline-styles */
import { ScrollView, View, Text } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { Title } from '../../components/ui/Title';
import { MenuItem } from '../../components/ui/MenuItem';
import { CustomView } from '../../components/ui/CustomView';

const animationMenuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

export const HomeScreen = () => {
  return (
    <CustomView margin>
        <ScrollView>
          <Title text="Opciones de menú" safe />

          {/* Animations */}
          <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 16 }}>Animaciones</Text>
          {animationMenuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === animationMenuItems.length - 1}
            />
          ))}

          {/* General Menu */}
          <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 16 }}>General</Text>
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}

          {/* UI Components */}
          <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 16 }}>UI</Text>
          {uiMenuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
            />
          ))}

        </ScrollView>
    </CustomView>
  );
};
