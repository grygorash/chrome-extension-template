import request from 'api/request';
import sendContentAction from 'content/content';
import { USERS_ROUTE } from 'api/constants';
import { ADD_CONTENT, GET_USERS } from 'background/backgroundActionTypes';
import { DRAW_USERS, DRAW_ADDED_CONTENT } from 'content/contentActionTypes';

export default async function({ type, payload }: { type: string, payload?: {} }, sender: any, response: any) {
  switch (type) {
    case GET_USERS: {
      const { success, data } = await request({ route: USERS_ROUTE });

      if (success) {
        sendContentAction({ type: DRAW_USERS, payload: data });
      }

      return;
    }

    case ADD_CONTENT: {
      sendContentAction({ type: DRAW_ADDED_CONTENT });

      return;
    }

    default: {
      return;
    }
  }
}
