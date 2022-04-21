import html from 'choo/html';
import raw from 'choo/html/raw';

import { pageDisplay } from './display';
import { pageEdit } from './edit';

export const pageView = (state, emit, page) => {
  if (state.edit) {
    return pageEdit(state, emit, page);
  }
  return html`<section>
    <header>
      <h1>${page.name}</h1>
    </header>
    ${ pageDisplay(state, emit, page) }
  </section>`;
}