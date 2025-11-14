/**
 * @component ShopifyIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/shopify)
 * @see {@link https://clicons.dev/icon/shopify} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
interface Props {
    /** Size of the icon in pixels */
    size?: number;
    /** Color of the icon */
    color?: string;
    /** Stroke width of the icon */
    strokeWidth?: number;
    /** Use absolute stroke width, ignores scaling */
    absoluteStrokeWidth?: boolean;
    /** CSS class name */
    class?: string;
    [key: string]: any;
}
declare const ShopifyIcon: import("svelte").Component<Props, {}, "">;
type ShopifyIcon = ReturnType<typeof ShopifyIcon>;
export default ShopifyIcon;
