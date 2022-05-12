import Users from 'components/Users/Users';
import TestContent from 'components/TestContent/TestContent';
import injectHTMLElement from 'utils/injectHTMLElement';
import removeHTMLElement from 'utils/removeHTMLElement';
import { DRAW_ADDED_CONTENT, DRAW_USERS, TEST_CONTENT } from 'content/contentActionTypes';

export default async function({ type, payload }: { type: string, payload?: any }, sender: any, response: any) {
  switch (type) {
    case DRAW_USERS: {
      removeHTMLElement(document.body, '#users');
      injectHTMLElement(document.body, <Users users={payload} />, { id: 'users' });

      return;
    }

    case TEST_CONTENT: {
      injectHTMLElement(document.body, <TestContent />);

      return;
    }

    case DRAW_ADDED_CONTENT: {
      const container = document.querySelector('#users') as HTMLElement;

      injectHTMLElement(container, <TestContent />);

      return;
    }

    default: {
      return;
    }
  }
}
