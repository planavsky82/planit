import { newSpecPage } from '@stencil/core/testing';
import { PlanitLoadingIndicator } from '../planit-loading-indicator';

describe('planit-loading-indicator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanitLoadingIndicator],
      html: `<planit-loading-indicator></planit-loading-indicator>`,
    });
    expect(page.root).toEqualHtml(`
      <planit-loading-indicator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planit-loading-indicator>
    `);
  });
});
