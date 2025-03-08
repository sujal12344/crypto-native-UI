import React from 'react';
import { View, Text } from 'react-native';

type BalanceDisplayProps = {
  balance: number;
  profit: number;
  percentageChange: number;
};

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ 
  balance, 
  profit, 
  percentageChange 
}) => {
  const formattedBalance = balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  const formattedProfit = profit > 0 ? `+${profit.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}` : profit.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  const formattedPercentage = percentageChange > 0 ? 
    `+${percentageChange.toFixed(2)}%` : 
    `${percentageChange.toFixed(2)}%`;

  return (
    <View className="items-center py-4">
      <Text className="text-white text-5xl font-bold">{formattedBalance}</Text>
      <Text className="text-green-500 font-medium text-sm mt-1">
        {formattedProfit} {formattedPercentage}
      </Text>
    </View>
  );
};

export default BalanceDisplay; 