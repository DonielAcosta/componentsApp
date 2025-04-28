import { Text } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor: string;
}
export const SubTilte = ({text,safe = false, backgroundColor = colors.background}:Props) => {
  const { top } = useSafeAreaInsets();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Text style={{
      ...globalStyles.subTitle,
      marginTop: safe ? top : 0,
      marginBottom: 10,
      backgroundColor: backgroundColor,
     }}>
      {text}
    </Text>
  );
};
