import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const ActionButtons: React.FC = () => {
  const actions = [
    { icon: 'qr-code', label: 'Receive', iconType: 'Ionicons' },
    { icon: 'paper-plane', label: 'Send', iconType: 'FontAwesome' },
    { icon: 'swap-horizontal', label: 'Swap', iconType: 'Ionicons' },
    { icon: 'logo-usd', label: 'Buy', iconType: 'Ionicons' },
  ];

  return (
    <View className="flex-row justify-between px-4 py-3 mb-2">
      {actions.map((action, index) => (
        <TouchableOpacity 
          key={index} 
          className="items-center justify-center w-20 h-[70px] bg-gray-500/10 rounded-2xl"
        >
          {action.iconType === 'Ionicons' ? (
            <Ionicons name={action.icon as any} size={22} color="#8E8E93" />
          ) : (
            <FontAwesome name={action.icon as any} size={22} color="#8E8E93" />
          )}
          <Text className="text-gray-400 text-xs mt-1">{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ActionButtons; 