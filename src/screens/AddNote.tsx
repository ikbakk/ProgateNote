import { FC, useContext, useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text } from 'react-native-magnus';
import { PageContext } from '../context/pageContext';
import { NoteContext } from '../context/notesContext';
import { INoteList } from '../../type';

const AddNote: FC = () => {
  const { setCurrentPage } = useContext(PageContext);
  const { notes, addNote } = useContext(NoteContext);

  const [newNote, setNewNote] = useState<INoteList>({} as INoteList);

  const handleInputChange = (value: string, props: string) => {
    setNewNote(prev => ({ ...prev, [props]: value }));
  };

  useEffect(() => {
    const latestNoteId = notes.reduce((latestId, note) => {
      return note.id > latestId ? note.id : latestId;
    }, 0);

    setNewNote(prev => ({ ...prev, id: latestNoteId + 1 }));
  }, [notes]);

  const handleSubmit = () => {
    addNote(newNote);
    setCurrentPage('home');
  };

  return (
    <KeyboardAvoidingView className='flex' behavior='padding'>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps='handled'>
        <View className='w-full '>
          <Text mb={24} textAlign='center' fontSize={32}>
            Tambahkan Note
          </Text>
          <View className='my-2'>
            <Text my={5}>Judul</Text>
            <Input
              onChangeText={value => handleInputChange(value, 'title')}
              placeholder='Masukkan Judul'
            />
          </View>
          <View className='my-2'>
            <Text my={5}>Deskripsi</Text>
            <Input
              multiline
              onChangeText={value => handleInputChange(value, 'desc')}
              placeholder='Masukkan Deskripsi'
            />
          </View>
          <Button onPress={() => handleSubmit()} w={'100%'} my={5} rounded={6}>
            Simpan
          </Button>
          <Button
            borderWidth={1}
            borderColor='blue500'
            bg='white'
            color='blue500'
            onPress={() => setCurrentPage('home')}
            w={'100%'}
            my={5}
            rounded={6}>
            Kembali ke Home
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNote;
