import { useState } from 'react';
import { Alert } from 'react-native';
import Api from '../lib/api';

export function useFetch<T>(url: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T>();
  const execute = async () => {
    try {
      setLoading(true);
      setResponse(await Api.get<T>(url));
    } catch (error) {
      console.warn({error})
      Alert.alert('Error', error);
    } finally {
      setLoading(false)
    }
  };
  return { loading, response, execute };
}

export function usePost<T>(url: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const execute = async (params: any) => {
    return new Promise(async (resolve, reject) => {
      try {
        setLoading(true);
        const data = await Api.post<T>(url, params);
        resolve(data)
      } catch (error) {
        console.warn({error})
        Alert.alert('Error', error);
        reject();
      } finally {
        setLoading(false)
      }
    });
  };
  return { loading, execute };
}
