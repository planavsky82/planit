import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planit-collection',
  styleUrl: 'planit-collection.css',
  shadow: true,
})
export class PlanitCollection {
  @Prop() type: 'grid' | 'list' = 'list';
  @Prop() columns: number = 2;

  render() {
    return (
      <Host>
        <div class={this.type}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
