import { StatusBar } from 'expo-status-bar';
import { AppRegistry, View } from 'react-native';
import { ThemeProvider } from 'react-native-magnus';

import PageProvider from './src/context/pageContext';
import CurrentPageWidget from './src/components/CurrentPageWidget';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import NoteProvider from './src/context/notesContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'bottom']}>
        <ThemeProvider>
          <PageProvider>
            <NoteProvider>
              <View className='h-screen flex flex-col justify-center items-center'>
                <StatusBar translucent />
                <CurrentPageWidget />
              </View>
            </NoteProvider>
          </PageProvider>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent('App', () => App);
