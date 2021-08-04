import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import configureMeasurements, { allMeasures } from 'convert-units';

export default function UnitConvertor() {
  const [selectedUnit, setSelectedUnit] = useState();
  const convert = configureMeasurements(allMeasures);

    return (
        <View>
          <Text>
            Hello
          </Text>
        </View>
    )
}
