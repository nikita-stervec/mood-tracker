import { Textarea } from '@mantine/core';
import { t } from 'i18next';

interface NoteAreaProps {
  note: string;
  setNote: (note: string) => void;
}

export const NoteArea = ({ note, setNote }: NoteAreaProps) => {
  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  return (
    <Textarea
      mt="xs"
      styles={{
        input: {
          '--input-bd-focus': 'var(--mantine-color-violet-6)',
        },
      }}
      value={note}
      onChange={handleNoteChange}
      placeholder={t('writeYouThinks')}
    />
  );
};
