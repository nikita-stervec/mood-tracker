interface TrackingFields {
  mood: string;
  activities: string[];
  note?: string;
}

export const validateTracking = (fields: TrackingFields) => {
  const errors: Partial<Record<keyof TrackingFields, boolean>> = {};

  if (!fields.mood) errors.mood = true;
  if (!fields.activities || fields.activities.length === 0)
    errors.activities = true;

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
