import { FC, memo } from 'react';
import map from 'lodash/map';
import Button from 'antd/lib/button/button';

import sendBackgroundAction from 'background/background';
import { ADD_CONTENT } from 'background/backgroundActionTypes';
import { UsersStyled } from 'components/Users/styled';

interface IUser {
  id: string,
  name: string,
  email: string,
}

interface IUsersProps {
  users: IUser[];
}

const Users: FC<IUsersProps> = ({ users }) => {
  const handleClick = () => sendBackgroundAction({ type: ADD_CONTENT });

  return (
    <UsersStyled>
      {map(users, ({ id, name, email }) => <div key={id}>Name: {name} - Email: {email}</div>)}
      <Button type="primary" onClick={handleClick}>Add Content To Users</Button>
    </UsersStyled>
  );
};

export default memo(Users);
