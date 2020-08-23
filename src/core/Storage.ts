import { AsyncStorage } from 'react-native';

export const storeItem = (item: string, itemBy: string = 'token') => {
  return AsyncStorage.setItem(
    itemBy,
    item
  );
};

export const getItem = (itemBy: string = 'token') => {
  return AsyncStorage.getItem(itemBy);
};

export const resetStorage = () => {
  return AsyncStorage.clear();
};
