import { Title } from './Title';
import { CustomView } from './CustomView';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors, globalStyles } from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const {top} = useSafeAreaInsets();

    const onRefresh = () =>{
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    };
  return (
    <ScrollView
        refreshControl={
            <RefreshControl
            refreshing={isRefreshing}
            progressViewOffset={top}
            colors={[colors.primary,'red','blue','green']}
            onRefresh={onRefresh}
            />
        }
        style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
        {/* <CustomView margin> */}
            <Title text="Pull To Refresh" safe/>
        {/* </CustomView> */}
    </ScrollView>
  );
};
