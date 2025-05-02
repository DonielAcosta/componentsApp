/* eslint-disable react-native/no-inline-styles */
import { Alert, View } from 'react-native';
import { globalStyles } from '../../../../config/theme/theme';
import { Button } from '../../../components/ui/Button';
import { CustomView } from '../../../components/ui/CustomView';
import { Title } from '../../../components/ui/Title';
import { showPrompt } from '../../../../config/adapters/prompt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export const AlertScreen = () => {
    const { currentTheme } = useContext(ThemeContext);
    const isDark = currentTheme === 'dark';

    const createTwoButtonAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                },
            ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light',
            }
        );

    const createThreeButtonAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                },
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed'),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss'),
                userInterfaceStyle: isDark ? 'dark' : 'light',
            }
        );

    const onShowPrompt = () => {
        showPrompt({
            title: 'Lorem Ipsum',
            subTitle: 'prueba',
            buttons: [{ text: 'ok', onPress: () => console.log('ok') }],
            placeholder: 'Placeholder',
        });
    };

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title safe text="Alertas" />

            <Button
                text="Alerta - 2 Botones"
                onPress={createTwoButtonAlert}
            />
            <View style={{ height: 10 }} />
            <Button
                text="Alerta - 3 Botones"
                onPress={createThreeButtonAlert}
            />
            <View style={{ height: 10 }} />
            <Button
                text="Prompt - Input"
                onPress={onShowPrompt}
            />
        </CustomView>
    );
};
