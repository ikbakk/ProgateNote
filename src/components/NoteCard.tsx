import { FC, useContext } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { NoteContext } from '../context/notesContext';
import { PageContext } from '../context/pageContext';

interface NoteCardProps {
  id: number;
  title: string;
  desc: string;
}

const NoteCard: FC<NoteCardProps> = ({ desc, title, id }) => {
  const { setCurrentPage } = useContext(PageContext);
  const { deleteNote, selectNote } = useContext(NoteContext);

  const editButtonHandle = () => {
    selectNote(id);
    setCurrentPage('edit');
  };

  return (
    <View className='border border-1 p-5 my-3 mx-5 rounded-md'>
      <Text my={3} fontSize={24}>
        {title}
      </Text>
      <Text my={3} fontSize={18}>
        {desc}
      </Text>
      <View className='flex flex-row mt-3 items-center justify-center w-full'>
        <Button
          onPress={() => editButtonHandle()}
          bg='yellow600'
          color='black'
          mx={30}
          px={30}
          py={10}>
          Ubah
        </Button>
        <Button
          onPress={() => deleteNote(id)}
          bg='red600'
          mx={30}
          px={30}
          py={10}>
          Hapus
        </Button>
      </View>
    </View>
  );
};

export default NoteCard;
