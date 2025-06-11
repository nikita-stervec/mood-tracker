import { SimpleButton } from '@/shared/ui';
import {
  Container,
  rem,
  Stack,
  Title,
  SimpleGrid,
  Card,
  Group,
  ThemeIcon,
  List,
  Text,
} from '@mantine/core';
import {
  IconArrowBack,
  IconHeart,
  IconChartLine,
  IconCalendarStats,
  IconMoodHappy,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionCard = motion(Card as any);
const MotionText = motion(Text as any);
const MotionTitle = motion(Title);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const growIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
  }),
};

export const AboutContainer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const featuresIcons = [
    <IconMoodHappy size={rem(28)} />,
    <IconChartLine size={rem(28)} />,
    <IconCalendarStats size={rem(28)} />,
  ];

  return (
    <Container size="sm" py={rem(40)}>
      <Stack gap="xl" mb={rem(50)}>
        <MotionTitle
          style={{
            textAlign: 'center',
          }}
          order={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span
            style={{
              padding: '8px 24px',
              borderRadius: '8px',
              backgroundColor: bgVisible
                ? 'var(--highlight-text-color)'
                : 'transparent',
              transition: 'background-color 0.2s ease-in-out',
            }}
          >
            {t('about.title')}
          </span>
        </MotionTitle>

        <MotionText
          size="xl"
          style={{ textAlign: 'center', maxWidth: rem(800), margin: '0 auto' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={1}
        >
          {t('about.subtitle')}
        </MotionText>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mb={rem(50)}>
        {[0, 1, 2].map((index) => (
          <MotionCard
            key={index}
            padding="xl"
            radius="md"
            shadow="sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            variants={growIn}
          >
            <Group mb="md">
              <ThemeIcon
                variant="light"
                size={rem(48)}
                radius="md"
                color="violet"
              >
                {featuresIcons[index]}
              </ThemeIcon>
              <Title order={3}>{t(`about.features.${index}.title`)}</Title>
            </Group>
            <Text size="md">{t(`about.features.${index}.description`)}</Text>
          </MotionCard>
        ))}
      </SimpleGrid>

      <MotionTitle
        order={2}
        mb="md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {t('about.philosophyTitle')}
      </MotionTitle>

      <MotionText
        mb="xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={1}
      >
        <span
          style={{
            padding: '2px',
            borderRadius: '8px',
            backgroundColor: bgVisible
              ? 'var(--highlight-text-color)'
              : 'transparent',
            transition: 'background-color 0.3s ',
          }}
        >
          {t('about.philosophyText')}
        </span>
      </MotionText>

      <List size="lg" spacing="sm" mb="xl">
        <MotionTitle
          order={2}
          mb="md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={2}
        >
          {t('about.howTitle')}
        </MotionTitle>

        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={index}
          >
            <List.Item
              icon={
                index === 0 ? (
                  <IconHeart size={rem(16)} color="red" />
                ) : index === 1 ? (
                  <IconChartLine size={rem(16)} color="blue" />
                ) : index === 2 ? (
                  <IconCalendarStats size={rem(16)} color="green" />
                ) : (
                  <IconMoodHappy size={rem(16)} color="yellow" />
                )
              }
            >
              <span
                style={{
                  padding: '1px',
                  borderRadius: '8px',
                  backgroundColor: bgVisible
                    ? 'var(--highlight-text-color)'
                    : 'transparent',
                  transition: 'background-color 2s ease-in',
                }}
              >
                {t(`about.howItems.${index}`)}
              </span>
            </List.Item>
          </motion.div>
        ))}
      </List>

      <MotionTitle
        order={2}
        mb="md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={4}
      >
        {t('about.forWhomTitle')}
      </MotionTitle>

      <MotionText
        mb="xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={5}
      >
        {t('about.forWhomText')}
      </MotionText>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {[0, 1].map((index) => (
          <MotionCard
            key={index}
            padding="lg"
            radius="md"
            withBorder
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={index}
          >
            <Title order={3} mb="sm">
              {t(index === 0 ? 'about.forSelf' : 'about.withPsych')}
            </Title>
            <Text>
              {t(index === 0 ? 'about.forSelfText' : 'about.withPsychText')}
            </Text>
          </MotionCard>
        ))}
      </SimpleGrid>

      <MotionCard
        mt="xl"
        padding="xl"
        radius="md"
        bg="var(--mantine-color-violet-light)"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={6}
      >
        <Title order={3} mb="md">
          {t('about.ctaTitle')}
        </Title>
        <Text mb="md">{t('about.ctaText')}</Text>
        <SimpleButton
          size="md"
          color="violet"
          onClick={() => navigate('/register')}
        >
          {t('about.ctaButton')}
        </SimpleButton>
      </MotionCard>
    </Container>
  );
};
