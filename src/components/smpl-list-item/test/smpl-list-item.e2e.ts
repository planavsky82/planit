import { newE2EPage } from '@stencil/core/testing';

describe('smpl-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<smpl-list-item></smpl-list-item>');

    const element = await page.find('smpl-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
