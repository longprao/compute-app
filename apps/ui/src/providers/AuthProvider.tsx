import { ReactNode } from 'react';
import { AuthContext } from 'contexts';

import { useTranslation } from 'react-i18next';
import { useDomainConfig } from 'utils/useDomainConfig';
import WelcomeLoader from 'components/Loader/WelcomeLoader';
import { useGetMeQuery } from 'redux/apis/userApi';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const { getDomainConfig } = useDomainConfig();

  const { isLoading } = useGetMeQuery();

  const user = useSelector((state: RootState) => state.auth.user);

  const contextValue = {
    isAuthenticated: !!user,
    loading: isLoading,
    user,
  };

  const domainTitle = getDomainConfig('title');
  const domainWelcomeMessage = getDomainConfig('welcome_message');

  const handleTranslation = (value: string, newName: string) => {
    i18n.addResource('en', 'translation', value, newName);
  };
  if (domainTitle) handleTranslation('l3agi', domainTitle);
  if (domainWelcomeMessage) handleTranslation('welcome-l3agi', domainWelcomeMessage);

  if (isLoading) {
    return <WelcomeLoader />;
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
