import { newE2EPage } from '@stencil/core/testing';

describe('planit-loading-indicator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planit-loading-indicator></planit-loading-indicator>');

    const element = await page.find('planit-loading-indicator');
    expect(element).toHaveClass('hydrated');
  });
});
