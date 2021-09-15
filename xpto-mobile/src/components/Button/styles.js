import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 274,
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 4,
  },
  title: {
    flex: 1,
    color: theme.colors.darkText,
    fontFamily: theme.fonts.title600,
    fontSize: 16,
    textAlign: 'center',
  },

  ghostContainer: {
    width: 274,
    height: 56,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 4,
  },
  ghostTitle: {
    flex: 1,
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    textAlign: 'center',
  },
});
