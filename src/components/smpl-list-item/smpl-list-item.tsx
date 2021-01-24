import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'smpl-list-item',
  styleUrl: 'smpl-list-item.css',
  shadow: true,
})
export class SmplListItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
