import { Component, Host, h } from '@stencil/core';

/*
set up new github repo
install stencil
add .gitconfig
add tailwindcss

*/

@Component({
  tag: 'smpl-container',
  styleUrl: 'smpl-container.css',
  shadow: true,
})
export class SmplContainerItem {

  render() {
    return (
      <Host>
        <div class="shadow-md border-gray-300 rounded-lg border p-2 mb-1">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
