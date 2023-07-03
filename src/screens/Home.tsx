import { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { NoteContext } from '../context/notesContext';
import { PageContext } from '../context/pageContext';

import { Button } from 'react-native-magnus';
import NoteCard from '../components/NoteCard';

const HomeScreen = () => {
  const { notes } = useContext(NoteContext);
  const { setCurrentPage } = useContext(PageContext);

  return (
    <View className='w-full h-full flex justify-center items-center pt-5'>
      <View className='w-full flex flex-row justify-center'>
        <Button onPress={() => setCurrentPage('add')} w={'90%'}>
          Tambahkan Note
        </Button>
      </View>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <NoteCard title={item.title} desc={item.desc} id={item.id} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
