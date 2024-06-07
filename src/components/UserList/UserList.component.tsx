import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './UserList.styles';
import { UserList } from './UserList.types';
import Button from '../Shared/Button';
import type { User } from '../../store/state/user/user.types';

type UserListComponentProps = {
  users: UserList | null;
  isLoading: boolean;
  onUserSelected: (aUser: User) => void;
};

const UserListContainer: React.FC<UserListComponentProps> = ({
  isLoading,
  users,
  // onUserSelected,
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={isLoading} />
      <Text>List of users: {JSON.stringify(users?.[0])}</Text>
      <Button
        onPress={() => {
          // onUserSelected(users[0]); // TODO
        }}>
        <Text>Button</Text>
      </Button>
    </View>
  );
};

export default UserListContainer;
