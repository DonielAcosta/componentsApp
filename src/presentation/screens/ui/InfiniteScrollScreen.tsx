/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, Image, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { FedeInImage } from '../../components/ui/FedeInImage';

export const InfiniteScrollScreen = () => {
    const [numbers,setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore = () =>{
        //cargar mas numeros
        const newArray = Array.from({ length:5 }, (_ , i)=> numbers.length + i);

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 3000);

    };
  return (
    <View style={{ backgroundColor:'black' }}>
        <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => <ListItem number={item}/>}
        ListFooterComponent={() => (
            <View style={{ height: 150, justifyContent: 'center' }}>
                <ActivityIndicator size={40} color={colors.primary} />
            </View>
        )}
        />
    </View>
  );
};

interface ListItemProps {
    number: number;
}
const ListItem = ({ number }: ListItemProps) => {
    return (
        // <Text style={{
        //     height: 300,
        //     backgroundColor: colors.primary,
        //     color: 'white',
        //     fontSize: 50,
        // }}>
        //     {number}
        // </Text>
        // <Image
        // source={{ uri: `https://picsum.photos/id/${number}/500/400`}}
        // style={{ height:400,width:'100%' }}
        // />
        <FedeInImage
        uri={`https://picsum.photos/id/${number}/500/400`}
        style={{ height:400,width:'100%' }}
        />
    );
};
