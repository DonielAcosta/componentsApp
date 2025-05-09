/* eslint-disable @typescript-eslint/no-shadow */
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../../config/theme/theme';
import { Text } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props{
    text: string,
    safe?: boolean;
    white?:boolean;
}

export const Title = ({text, safe = false, white = false}:Props) => {

  const { top } = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);

  return (
    <Text
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text,
    }}
    >{text}</Text>
  );
};
