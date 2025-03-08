import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CryptoAssetProps = {
  name: string;
  symbol: string;
  amount: number;
  value: number;
  change: number;
  // iconUrl: any; // This would be a require() for local images or a URL
};

const CryptoAsset: React.FC<CryptoAssetProps> = ({
  name,
  symbol,
  amount,
  value,
  change,
  // iconUrl,
}) => {
  const isPositive = change >= 0;
  const formattedChange = isPositive ? `+$${Math.abs(change).toFixed(2)}` : `-$${Math.abs(change).toFixed(2)}`;
  
  // Placeholder for crypto icon
  const renderPlaceholderIcon = () => {
    let bgColor = "bg-gray-700";
    let textColor = "text-white";
    
    if (symbol === "HOHOHO") bgColor = "bg-red-500";
    else if (symbol === "SOL") bgColor = "bg-blue-900";
    else if (symbol === "2025X") bgColor = "bg-yellow-800";
    else if (symbol === "XRP") bgColor = "bg-blue-500";
    else if (symbol === "CHILLGR") bgColor = "bg-green-700";
    else if (symbol === "HUZZMAS") bgColor = "bg-red-600";
    
    return (
      <View className={`w-10 h-10 rounded-full ${bgColor} items-center justify-center mr-3`}>
        <Text className={`${textColor} font-bold text-xs`}>{symbol.charAt(0)}</Text>
      </View>
    );
  };
  
  return (
    <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-800">
      <View className="flex-row items-center">
        {/* <Image 
          source={iconUrl} 
          className="w-10 h-10 rounded-full mr-3" 
        /> */}
        {renderPlaceholderIcon()}
        <View>
          <Text className="text-white font-medium">{name}</Text>
          <Text className="text-gray-400 text-xs">
            {amount.toLocaleString(undefined, { maximumFractionDigits: 6 })} {symbol}
          </Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-white font-medium">
          ${value.toFixed(2)}
        </Text>
        <Text className={isPositive ? "text-green-500 text-xs" : "text-red-500 text-xs"}>
          {formattedChange}
        </Text>
      </View>
      {/* Document icon for some assets */}
      {['HOHOHO', '2025X', 'XRP', 'CHILLGR', 'HUZZMAS'].includes(symbol) && (
        <View className="absolute right-16">
          <Ionicons name="document-text-outline" size={14} color="white" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CryptoAsset; 