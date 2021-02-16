import { Component, Host, h } from '@stencil/core';

/*
set up new github repo
install stencil
add .gitconfig
add tailwindcss

*/

@Component({
  tag: 'planit-container',
  styleUrl: 'planit-container.css',
  shadow: true,
})
export class PlanitContainerItem {

  render() {
    return (
      <Host>
        <div class="shadow-md border-gray-500 rounded-lg border border-solid p-3 mb-1">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
