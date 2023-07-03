import { createContext, FC, ReactNode, useState } from 'react';
import { notes } from '../lib/Note';
import { INoteList } from '../../type';

interface ProviderProps {
  children: ReactNode;
}

interface NoteContextType {
  notes: INoteList[];
  addNote: (note: INoteList) => void;
  deleteNote: (id: number) => void;
  editNote: (id: number, updatedNote: INoteList) => void;
  selectNote: (id: number) => void;
  selectedNote: INoteList;
}

export const NoteContext = createContext<NoteContextType>(
  {} as NoteContextType
);

const NoteProvider: FC<ProviderProps> = ({ children }) => {
  const [noteList, setNoteList] = useState<INoteList[]>(notes);
  const [selectedNote, setSelectedNote] = useState<INoteList>({} as INoteList);

  const selectNote = (id: number) => {
    const foundNote = noteList.find(note => note.id === id);
    setSelectedNote(foundNote ?? ({} as INoteList));
  };

  const addNote = (note: INoteList) => {
    const updatedNoteList = [...noteList, note];
    setNoteList(updatedNoteList);
  };

  const deleteNote = (id: number) => {
    const updatedNoteList = noteList.filter(note => note.id !== id);
    setNoteList(updatedNoteList);
  };

  const editNote = (id: number, updatedNote: INoteList) => {
    const updatedNoteList = noteList.map(note => {
      return note.id === id ? { ...note, ...updatedNote } : note;
    });
    setNoteList(updatedNoteList);
  };

  const contextValue = {
    notes: noteList,
    addNote,
    deleteNote,
    editNote,
    selectNote,
    selectedNote
  };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};

export default NoteProvider;
