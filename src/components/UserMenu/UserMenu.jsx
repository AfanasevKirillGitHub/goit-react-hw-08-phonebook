import { LogOut, User, UserText } from 'components/Header/Header.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <User>
      <UserText>{user.name}</UserText>
      <LogOut type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOut>
    </User>
  );
};
