import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planit-list',
  styleUrl: 'planit-list.css',
  shadow: true,
})
export class PlanitList {

  render() {
    return (
      <Host>
        List
        <slot></slot>
      </Host>
    );
  }

}
