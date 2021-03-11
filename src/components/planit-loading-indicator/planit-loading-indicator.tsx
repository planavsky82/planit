import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planit-loading-indicator',
  styleUrl: 'planit-loading-indicator.css',
  shadow: true,
})
export class PlanitLoadingIndicator {
  @Prop() display: boolean = false;

  render() {
    if (this.display) {
      return (
        <Host>
          <div class="overlay">
            <div class="loading one bg-gray-200 w-6 h-6 mx-1"></div>
            <div class="loading two bg-gray-200 w-6 h-6 mx-1"></div>
            <div class="loading three bg-gray-200 w-6 h-6 mx-1"></div>
          </div>
        </Host>
      );
    }
  }

}
