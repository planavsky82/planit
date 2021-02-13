import { newE2EPage } from '@stencil/core/testing';

describe('planit-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planit-list></planit-list>');

    const element = await page.find('planit-list');
    expect(element).toHaveClass('hydrated');
  });
});
