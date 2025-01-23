import { Slider } from '@mantine/core';
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
}

export const MoodSlider = ({ mood, setMood }: MoodSliderProps) => {
  const { i18n } = useTranslation();
  const moodOptions: MoodOption[] = useMoodOptions();
  const [sliderValue, setSliderValue] = useState(2);

  useEffect(() => {
    if (moodOptions.length > 0) {
      const index = moodOptions.findIndex(
        (option) => option.value === mood.toLowerCase(),
      );
      if (index !== -1) {
        setSliderValue(index);
      } else {
        setSliderValue(2);
      }
    }
  }, [mood, moodOptions, i18n.language]);

  const handleMoodChange = (value: number) => {
    setSliderValue(value);
    if (moodOptions[value]) {
      setMood(moodOptions[value].value);
    }
  };

  return (
    <Slider
      mt="xs"
      color="violet"
      value={sliderValue}
      min={0}
      max={moodOptions.length - 1}
      onChange={handleMoodChange}
      marks={moodOptions.map((option, index) => ({
        value: index,
        label: option.emoji,
      }))}
    />
  );
};
