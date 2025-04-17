/* eslint-disable react-native/no-inline-styles */
import { Card } from '../../components/ui/Card';
import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustonView';
import { Button } from '../../components/ui/Button';

export const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <CustomView style={{ marginTop:100 }}>
        <Card>
        {/* <Text>SwitchScreen</Text> */}
        <Button
            text="Click me"
            onPress={ () =>{}}
               />
        </Card>
    </CustomView>
  );
};
