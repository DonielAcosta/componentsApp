import { View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // ruta corregida
import { Text } from 'react-native';

export const ChangeThemeScreen = () => {
    const { setTheme, currentTheme,colors } = useContext(ThemeContext);

    return (
        <CustomView margin>
            <Title text={`Cambiar Tema: ${currentTheme}`} safe />
            <Button
                text="Light"
                onPress={() => setTheme('light')}
            />
            <View style={{ height: 10 }} />
            <Button
                text="Dark"
                onPress={() => setTheme('dark')}
            />
            <View style={{ height: 10 }} />

            <Text style={{ color: colors.text}}>
              {JSON.stringify(colors,null, 2)}
            </Text>
        </CustomView>
    );
};
