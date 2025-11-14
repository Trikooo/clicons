/**
 * @component GoForward5SecIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/go-forward5-sec)
 * @see {@link https://clicons.dev/icon/go-forward5-sec} - Icon preview
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
declare const GoForward5SecIcon: import("svelte").Component<Props, {}, "">;
type GoForward5SecIcon = ReturnType<typeof GoForward5SecIcon>;
export default GoForward5SecIcon;
