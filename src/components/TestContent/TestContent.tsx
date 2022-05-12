import { FC, memo } from 'react';

import { TestContentStyled } from 'components/TestContent/styled';

const TestContent: FC = () =>
  <TestContentStyled className="test-content">TEST CONTENT</TestContentStyled>;

export default memo(TestContent);
