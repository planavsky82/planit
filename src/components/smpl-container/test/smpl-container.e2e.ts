import { newE2EPage } from '@stencil/core/testing';

describe('smpl-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<smpl-container></smpl-container>');

    const element = await page.find('smpl-container');
    expect(element).toHaveClass('hydrated');
  });
});
