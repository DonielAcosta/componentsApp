import 'react-native-gesture-handler';
import { Navigator } from './presentation/navigator/Navigator';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

const AppNavigation = ({ children }: PropsWithChildren) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppTheme = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
};

export const ComponentsApp = () => {
  return (
    <AppTheme>
      <Navigator />
    </AppTheme>
  );
};
