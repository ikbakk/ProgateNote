import { FC, useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Input, Text } from 'react-native-magnus';
import { PageContext } from '../context/pageContext';
import { NoteContext } from '../context/notesContext';
import { INoteList } from '../../type';

interface EditNoteProps {}

const EditNote: FC<EditNoteProps> = () => {
  const { setCurrentPage } = useContext(PageContext);
  const { selectedNote, editNote } = useContext(NoteContext);

  const [newNote, setNewNote] = useState<INoteList>({} as INoteList);

  const handleInputChange = (value: string, props: string) => {
    setNewNote(prev => ({ ...prev, [props]: value }));
  };

  const handleSubmit = () => {
    editNote(selectedNote.id, newNote);
    setCurrentPage('home');
  };

  return (
    <KeyboardAvoidingView className='flex' behavior='padding'>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps='handled'>
        <View className='w-full '>
          <Text mb={24} textAlign='center' fontSize={32}>
            Ubah Note
          </Text>
          <View className='my-2'>
            <Text my={5}>Judul</Text>
            <Input
              onChangeText={value => handleInputChange(value, 'title')}
              placeholder={selectedNote.title}
            />
          </View>
          <View className='my-2'>
            <Text my={5}>Deskripsi</Text>
            <Input
              multiline
              onChangeText={value => handleInputChange(value, 'desc')}
              placeholder={selectedNote.desc}
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

export default EditNote;
