import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type AccountHeaderProps = {
  accountName: string;
  accountNumber: number;
};

const AccountHeader: React.FC<AccountHeaderProps> = ({ accountName, accountNumber }) => {
  return (
    <View className="flex-row justify-between items-center px-4 pt-12 pb-2">
      <View className="flex-row items-center">
        <View className="w-8 h-8 rounded-full bg-purple-400 items-center justify-center mr-2">
          <Text className="text-purple-900 font-bold text-xs">A{accountNumber}</Text>
        </View>
        <Text className="text-white font-medium text-base">{accountName}</Text>
        <Ionicons name="chevron-down" size={16} color="white" style={{ marginLeft: 2 }} />
      </View>
      <View className="flex-row">
        <TouchableOpacity className="mr-4">
          <Ionicons name="expand-outline" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountHeader; 