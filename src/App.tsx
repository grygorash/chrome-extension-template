import { FC, useState } from 'react';
import { render } from 'react-dom';
import Button from 'antd/lib/button/button';
import 'assets/popover';

import sendBackgroundAction from 'background/background';
import sendContentAction from 'content/content';
import { TEST_CONTENT } from 'content/contentActionTypes';
import { GET_USERS } from 'background/backgroundActionTypes';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGetUsers = async() => {
    setIsLoading(true);
    await sendBackgroundAction({ type: GET_USERS });
    setIsLoading(false);
  };

  const handleContentTest = () => {
    sendContentAction({ type: TEST_CONTENT });
  };

  return (
    <div>
      <Button
        type="primary"
        loading={isLoading}
        onClick={handleGetUsers}
      >
        get users
      </Button>
      <Button onClick={handleContentTest}>content test</Button>
    </div>
  );
};

render(<App />, window.document.querySelector('#app-container'));

if (module.hot) {
  module.hot.accept();
}
