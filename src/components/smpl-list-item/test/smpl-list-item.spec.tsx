import { newSpecPage } from '@stencil/core/testing';
import { SmplListItem } from '../smpl-list-item';

describe('smpl-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SmplListItem],
      html: `<smpl-list-item></smpl-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <smpl-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </smpl-list-item>
    `);
  });
});
