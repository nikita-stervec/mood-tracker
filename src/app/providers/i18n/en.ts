import { Translations } from './types';

export const enTrans: Translations = {
  header: {
    about: 'About',
    track: 'Track',
    login: 'Login',
    register: 'Register',
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    logout: 'Logout',
  },

  auth: {
    login: 'Login',
    register: 'Register',
    guest: 'Continue as a guest..🥷',
    noAccout: 'No account? Register!',
    haveAccout: 'Already have an account? Enter!',
    password: 'Password',
    email: 'Email',
    enter: 'Enter',
  },

  settings: {
    lightTheme: 'Light Theme',
    darkTheme: 'Dark Theme',
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    track: 'Track It',
    logout: 'Log out',
  },

  card: {
    welcomeBlock: 'Welcome Home!',
    namePlaceholder: 'Input Your Name',
  },

  alert: {
    notificationTitle: 'Success!',
    notificationMessage: 'Name has been changed!.',
  },

  validation: {
    moodRequired: 'Please select your mood.',
    activityRequired: 'Select what you have been doing recently.',
    noteRequired: 'Describe how your day went, what was good?',
  },

  track: {
    chooseMood: 'Choose your mood',
    chooseActivities: 'Choose your activities',
    writeNote: 'Write your note',
    yourTracks: 'Your tracks:',
    noTracks: 'You have no tracks yet..',
    writeYouThinks: 'Some words about it...',
    save: 'Save',
  },

  activitiesList: {
    reading: 'Reading',
    sport: 'Sport',
    music: 'Music',
    work: 'Work',
    relax: 'Relax',
    walking: 'Walking',
    cooking: 'Cooking',
    watching_movies: 'Watching movies',
    gaming: 'Gaming',
    meditation: 'Meditation',
    drawing: 'Drawing',
    writing: 'Writing',
    shopping: 'Shopping',
    traveling: 'Traveling',
    photography: 'Photography',
    dancing: 'Dancing',
    gardening: 'Gardening',
    studying: 'Studying',
    socializing: 'Socializing',
    yoga: 'Yoga',
  },

  trackCard: {
    mood: 'Mood',
    activities: 'Activities',
    note: 'Note',
    createdAt: 'Created At',
    updatedAt: 'Updated At',
  },

  moodList: {
    angry: 'Angry',
    sad: 'Sad',
    tired: 'Tired',
    neutral: 'Neutral',
    calm: 'Calm',
    happy: 'Happy',
    inspired: 'Inspired',
    excited: 'Excited',
  },

  notification: {
    successTitle: 'Success!',
    savedMessage: 'Track successefy saved!',
    updatedMessage: 'Track successefy updated!',
    deletedMessage: 'Track successefy deleted!',
  },

  demoQuote: {
    quote1author: 'Oscar Wilde',
    quote1quote: 'Always forgive your enemies; nothing annoys them so much.',
  },

  notFound: {
    title: 'Page Not Found',
    description:
      'The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.',
    actions: {
      back: 'Go Back',
      home: 'Home',
    },
  },

  about: {
    title: 'MoodTracker',
    subtitle:
      'Your personal assistant in tracking emotional state and improving psychological well-being',
    features: {
      0: {
        title: 'Ease of use',
        description:
          'Mark your mood in a couple of seconds at any time of the day',
      },
      1: {
        title: 'Visual analytics',
        description: 'Visual charts help track mood dynamics',
      },
      2: {
        title: 'History of records',
        description: 'Return to any date and view your entries',
      },
    },
    philosophyTitle: 'Our Philosophy',
    philosophyText:
      "MoodTracker was created with the belief that understanding your emotions is the first step to improving your quality of life. We don't aim to replace professional psychological help, but want to give you a tool for self-discovery.",
    howTitle: 'How It Works',
    howItems: {
      0: 'Mark your mood daily',
      1: 'Analyze statistics and trends',
      2: 'Note important events and their impact on mood',
      3: 'Identify patterns in your emotional state',
    },
    forWhomTitle: 'Who This Service Is For',
    forWhomText:
      'MoodTracker is suitable for anyone who wants to better understand their emotions:',
    forSelf: 'For Personal Use',
    forSelfText:
      'Track your mood to better understand your reactions to events and improve your emotional state',
    withPsych: 'With a Psychologist',
    withPsychText:
      'Use MoodTracker data in sessions with a specialist to make your work more productive and precise',
    ctaTitle: 'Start Your Journey to Emotional Balance',
    ctaText:
      'Join thousands of users who have already improved their emotional well-being with MoodTracker',
    ctaButton: 'Sign Up',
    back: 'Back',
  },
};
