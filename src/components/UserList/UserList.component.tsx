import React, { useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './UserList.styles';
import { UserList } from './UserList.types';
import UserCarousel from '../Shared/UserCarousel';
import type { User } from '../../store/state/user/user.types';
import Layout from '../Shared/Layout';
import Text from '../Shared/Text';
import Button from '../Shared/Button';

type UserListComponentProps = {
  users: UserList | null;
  isLoading: boolean;
  onUserSelected: (aUser: User) => void;
  onRetryTapped: () => void;
};

const UserListContainer: React.FC<UserListComponentProps> = ({
  isLoading,
  users,
  onUserSelected,
  onRetryTapped,
}) => {
  if (isLoading) {
    return (
      <Layout style={styles.container} showLogo>
        <ActivityIndicator
          animating
          size="large"
          color="white"
          style={styles.loadingIndicator}
        />
      </Layout>
    );
  }
  return (
    <Layout style={styles.container} showLogo>
      {(users ?? [])?.length > 0 ? (
        <>
          <Text style={styles.title}>Select a user:</Text>
          <UserCarousel
            users={users}
            style={styles.carousel}
            onUserSelected={onUserSelected}
          />
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.noUsersFoundTitle}>No users found</Text>
          <Button
            style={styles.retryButton}
            onPress={onRetryTapped}
            mode="highlight">
            <Text style={styles.noUsersFoundSubtitle}>
              Tap here to try again
            </Text>
          </Button>
        </View>
      )}
    </Layout>
  );
};

export default UserListContainer;
