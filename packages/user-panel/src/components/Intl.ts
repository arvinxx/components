import { useTranslation } from 'react-i18next';

export const useFormatMessage = () => {
  const { t } = useTranslation();

  return (id, values?) => t(id, values);
};
