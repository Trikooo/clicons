/**
 * @component WebflowIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/webflow)
 * @see {@link https://clicons.dev/icon/webflow} - Icon preview
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
declare const WebflowIcon: import("svelte").Component<Props, {}, "">;
type WebflowIcon = ReturnType<typeof WebflowIcon>;
export default WebflowIcon;
