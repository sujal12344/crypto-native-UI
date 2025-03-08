import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { QrCode, Send, ArrowRightLeft, DollarSign   } from 'lucide-react-native';

const ActionButtons: React.FC = () => {
  const actions = [
    { icon: QrCode , label: 'Receive' },
    { icon: Send , label: 'Send' },
    { icon: ArrowRightLeft , label: 'Swap' },
    { icon: DollarSign , label: 'Buy'},
  ];
  // const actions = [
  //   { icon: 'qr-code', label: 'Receive', iconType: 'Ionicons' },
  //   { icon: 'paper-plane', label: 'Send', iconType: 'FontAwesome' },
  //   { icon: 'swap-horizontal', label: 'Swap', iconType: 'Ionicons' },
  //   { icon: 'logo-usd', label: 'Buy', iconType: 'Ionicons' },
  // ];

  return (
    <View className="flex-row justify-between px-4 py-3 mb-2 gap-x-2">
      {actions.map((action, index) => (
        <TouchableOpacity 
          key={index} 
          className="items-center justify-center w-20 h-[70px] bg-slate-50/5 rounded-xl p-2"
        >
            <action.icon size={action.icon === Send ? 20 : 22} color="#758ace" />
            <Text className="text-gray-400 text-sm mt-1">{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ActionButtons; 