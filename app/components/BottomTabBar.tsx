import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type BottomTabBarProps = {
  activeTab: string;
  onTabPress: (tabName: string) => void;
};

const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onTabPress }) => {
  const tabs = [
    { name: 'home', icon: 'home' },
    { name: 'grid', icon: 'grid' },
    { name: 'sync', icon: 'sync' },
    { name: 'time', icon: 'time' },
    { name: 'information-circle', icon: 'information-circle' },
  ];

  return (
    <View className="flex-row justify-around items-center p-3 px-5 pt-1 border-gray-800">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => onTabPress(tab.name)}
          className="items-center justify-center p-2"
        >
          <Ionicons
            name={tab.icon as any}
            size={20}
            color={activeTab === tab.name ? '#ffffff' : '#8E8E93'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTabBar; 