/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PlanitContainer {
    }
    interface PlanitList {
    }
}
declare global {
    interface HTMLPlanitContainerElement extends Components.PlanitContainer, HTMLStencilElement {
    }
    var HTMLPlanitContainerElement: {
        prototype: HTMLPlanitContainerElement;
        new (): HTMLPlanitContainerElement;
    };
    interface HTMLPlanitListElement extends Components.PlanitList, HTMLStencilElement {
    }
    var HTMLPlanitListElement: {
        prototype: HTMLPlanitListElement;
        new (): HTMLPlanitListElement;
    };
    interface HTMLElementTagNameMap {
        "planit-container": HTMLPlanitContainerElement;
        "planit-list": HTMLPlanitListElement;
    }
}
declare namespace LocalJSX {
    interface PlanitContainer {
    }
    interface PlanitList {
    }
    interface IntrinsicElements {
        "planit-container": PlanitContainer;
        "planit-list": PlanitList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "planit-container": LocalJSX.PlanitContainer & JSXBase.HTMLAttributes<HTMLPlanitContainerElement>;
            "planit-list": LocalJSX.PlanitList & JSXBase.HTMLAttributes<HTMLPlanitListElement>;
        }
    }
}
