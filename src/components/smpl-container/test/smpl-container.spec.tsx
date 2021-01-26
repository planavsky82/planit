import { newSpecPage } from '@stencil/core/testing';
import { SmplContainerItem } from '../smpl-container';

describe('smpl-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SmplContainerItem],
      html: `<smpl-container></smpl-container>`,
    });
    expect(page.root).toEqualHtml(`
      <smpl-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </smpl-container>
    `);
  });
});
