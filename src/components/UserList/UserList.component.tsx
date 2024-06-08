import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './UserList.styles';
import { UserList } from './UserList.types';
import UserCarousel from '../Shared/UserCarousel';
import type { User } from '../../store/state/user/user.types';
import Layout from '../Shared/Layout';
import Text from '../Shared/Text';

type UserListComponentProps = {
  users: UserList | null;
  isLoading: boolean;
  onUserSelected: (aUser: User) => void;
};

const UserListContainer: React.FC<UserListComponentProps> = ({
  isLoading,
  users,
  onUserSelected,
}) => {
  if (isLoading) {
    return (
      <Layout style={styles.container}>
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
    <Layout style={styles.container}>
      <Text style={styles.title}>Select a user:</Text>
      <UserCarousel
        users={users}
        style={styles.carousel}
        onUserSelected={onUserSelected}
      />
    </Layout>
  );
};

export default UserListContainer;
