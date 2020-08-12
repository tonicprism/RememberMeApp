import React from 'react';
import {
  FontAwesome,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';

function chooseIconFamily(fontFamily, iconName, iconSize, iconColor) {
  switch (fontFamily) {
    case 'FontAwesome':
      return <FontAwesome name={iconName} size={iconSize} color={iconColor} />;
    case 'AntDesign':
      return <AntDesign name={iconName} size={iconSize} color={iconColor} />;
    case 'Entypo':
      return <Entypo name={iconName} size={iconSize} color={iconColor} />;
    case 'EvilIcons':
      return <EvilIcons name={iconName} size={iconSize} color={iconColor} />;
    case 'Feather':
      return <Feather name={iconName} size={iconSize} color={iconColor} />;
    case 'FontAwesome5':
      return <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />;
    case 'Fontisto':
      return <Fontisto name={iconName} size={iconSize} color={iconColor} />;
    case 'Foundation':
      return <Foundation name={iconName} size={iconSize} color={iconColor} />;
    case 'Ionicons':
      return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />;
    case 'MaterialIcons':
      return <MaterialIcons name={iconName} size={iconSize} color={iconColor} />;
    case 'Octicons':
      return <Octicons name={iconName} size={iconSize} color={iconColor} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={iconName} size={iconSize} color={iconColor} />;
    case 'Zocial':
      return <Zocial />;
  }
}
export default chooseIconFamily;
