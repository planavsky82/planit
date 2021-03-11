/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PlanitCollection {
        "columns": number;
        "type": 'grid' | 'list';
    }
    interface PlanitContainer {
    }
    interface PlanitLoadingIndicator {
        "display": boolean;
    }
}
declare global {
    interface HTMLPlanitCollectionElement extends Components.PlanitCollection, HTMLStencilElement {
    }
    var HTMLPlanitCollectionElement: {
        prototype: HTMLPlanitCollectionElement;
        new (): HTMLPlanitCollectionElement;
    };
    interface HTMLPlanitContainerElement extends Components.PlanitContainer, HTMLStencilElement {
    }
    var HTMLPlanitContainerElement: {
        prototype: HTMLPlanitContainerElement;
        new (): HTMLPlanitContainerElement;
    };
    interface HTMLPlanitLoadingIndicatorElement extends Components.PlanitLoadingIndicator, HTMLStencilElement {
    }
    var HTMLPlanitLoadingIndicatorElement: {
        prototype: HTMLPlanitLoadingIndicatorElement;
        new (): HTMLPlanitLoadingIndicatorElement;
    };
    interface HTMLElementTagNameMap {
        "planit-collection": HTMLPlanitCollectionElement;
        "planit-container": HTMLPlanitContainerElement;
        "planit-loading-indicator": HTMLPlanitLoadingIndicatorElement;
    }
}
declare namespace LocalJSX {
    interface PlanitCollection {
        "columns"?: number;
        "type"?: 'grid' | 'list';
    }
    interface PlanitContainer {
    }
    interface PlanitLoadingIndicator {
        "display"?: boolean;
    }
    interface IntrinsicElements {
        "planit-collection": PlanitCollection;
        "planit-container": PlanitContainer;
        "planit-loading-indicator": PlanitLoadingIndicator;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "planit-collection": LocalJSX.PlanitCollection & JSXBase.HTMLAttributes<HTMLPlanitCollectionElement>;
            "planit-container": LocalJSX.PlanitContainer & JSXBase.HTMLAttributes<HTMLPlanitContainerElement>;
            "planit-loading-indicator": LocalJSX.PlanitLoadingIndicator & JSXBase.HTMLAttributes<HTMLPlanitLoadingIndicatorElement>;
        }
    }
}
