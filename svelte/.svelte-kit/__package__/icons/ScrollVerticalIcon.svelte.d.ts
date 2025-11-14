/**
 * @component ScrollVerticalIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/scroll-vertical)
 * @see {@link https://clicons.dev/icon/scroll-vertical} - Icon preview
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
declare const ScrollVerticalIcon: import("svelte").Component<Props, {}, "">;
type ScrollVerticalIcon = ReturnType<typeof ScrollVerticalIcon>;
export default ScrollVerticalIcon;
