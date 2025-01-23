import { useState } from 'react';
import { UserState } from '@/entities/User/model/User';
import { SimpleInput } from '@/shared/ui';
import { Button, Container } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

export const InputUsernameSection = () => {
  const { t } = useTranslation();
  const [user, setUser] = useRecoilState(UserState);
  const [name, setName] = useState(user.name);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSaveClick = () => {
    setUser({ ...user, name });
    setName('');
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <SimpleInput
        size="sm"
        placeholder={t('namePlaceholder')}
        value={name}
        onChange={handleInputChange}
      />
      <Button color="violet" h="36px" onClick={handleSaveClick}>
        <IconCheck size={18} />
      </Button>
    </Container>
  );
};
