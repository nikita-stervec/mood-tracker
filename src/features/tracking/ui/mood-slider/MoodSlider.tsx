import { Slider, Text } from '@mantine/core';
import { useMoodOptions } from '../../model';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface MoodOption {
  value: string;
  label: string;
  emoji: string;
}

interface MoodSliderProps {
  mood: string;
  setMood: (mood: string) => void;
  error?: boolean;
}

export const MoodSlider = ({ mood, setMood, error }: MoodSliderProps) => {
  const { t, i18n } = useTranslation();
  const moodOptions: MoodOption[] = useMoodOptions();
  const [sliderValue, setSliderValue] = useState(3);

  useEffect(() => {
    if (moodOptions.length > 0) {
      const index = moodOptions.findIndex(
        (option) => option.value === mood.toLowerCase(),
      );

      if (index !== -1) {
        setSliderValue(index + 1);
      } else {
        setSliderValue(3);
      }
    }
  }, [mood, moodOptions, i18n.language]);

  const handleMoodChange = (value: number) => {
    setSliderValue(value);

    const moodIndex = value - 1;

    if (moodOptions[moodIndex]) {
      setMood(moodOptions[moodIndex].value);
    }
  };

  return (
    <div>
      <Slider
        mt="xs"
        color={error ? 'red' : 'violet'}
        value={sliderValue}
        min={1}
        max={7}
        onChange={handleMoodChange}
        marks={moodOptions.map((option, index) => ({
          value: index + 1,
          label: option.emoji,
        }))}
      />
      {error && (
        <Text c="red" size="xs" mt={4}>
          {t('validation.moodRequired')}
        </Text>
      )}
    </div>
  );
};
