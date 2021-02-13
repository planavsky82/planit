import { newSpecPage } from '@stencil/core/testing';
import { PlanitList } from '../planit-list';

describe('planit-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanitList],
      html: `<planit-list></planit-list>`,
    });
    expect(page.root).toEqualHtml(`
      <planit-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planit-list>
    `);
  });
});
