/**
 * @component GoBackward60SecIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/go-backward60-sec)
 * @see {@link https://clicons.dev/icon/go-backward60-sec} - Icon preview
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
declare const GoBackward60SecIcon: import("svelte").Component<Props, {}, "">;
type GoBackward60SecIcon = ReturnType<typeof GoBackward60SecIcon>;
export default GoBackward60SecIcon;
