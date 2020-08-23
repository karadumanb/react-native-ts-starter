import { StyleSheet } from 'react-native';
import Layout from './Layout';

const { width, height } = Layout;

export const globalStyles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  flexStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  fullDimensional: {
    width: '100%',
    height: '100%',
  },
  fullWindowWidth: {
    width
  },
  fullWindowHeight: {
    height
  }
})
