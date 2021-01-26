import { Component, Host, h } from '@stencil/core';

/*
set up new github repo
install stencil
add .gitconfig
add tailwindcss

*/

@Component({
  tag: 'smpl-list-item',
  styleUrl: 'smpl-list-item.css',
  shadow: true,
})
export class SmplListItem {

  render() {
    return (
      <Host>
        <div class="shadow-md border-gray-300 border-2 p-2 mb-1">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
