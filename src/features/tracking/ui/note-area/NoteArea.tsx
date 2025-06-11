import { Textarea, Text } from '@mantine/core';
import { t } from 'i18next';
import { useEffect, useRef, useState } from 'react';

interface NoteAreaProps {
  note: string;
  setNote: (note: string) => void;
  error?: boolean;
}

export const NoteArea = ({ note, setNote, error }: NoteAreaProps) => {
  const [minRows, setMinRows] = useState(3);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.max(
        textarea.scrollHeight,
        minRows * 24,
      )}px`;
    }
  }, [note, minRows]);

  return (
    <div style={{ position: 'relative' }}>
      <Textarea
        ref={textareaRef}
        mt="xs"
        autosize
        minRows={minRows}
        maxRows={10}
        styles={{
          input: {
            borderColor: error
              ? 'var(--mantine-color-red-6)'
              : 'var(--mantine-color-violet-6)',
            resize: 'vertical',
            overflow: 'hidden',
            transition: 'height 0.2s ease',
          },
          root: {
            overflow: 'visible',
          },
        }}
        value={note}
        onChange={handleNoteChange}
        placeholder={t('track.writeYouThinks')}
      />
      {error && (
        <Text c="red" size="xs" mt={4}>
          {t('validation.noteRequired')}
        </Text>
      )}
    </div>
  );
};
