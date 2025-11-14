/**
 * @component ClappingIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/clapping)
 * @see {@link https://clicons.dev/icon/clapping} - Icon preview
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
declare const ClappingIcon: import("svelte").Component<Props, {}, "">;
type ClappingIcon = ReturnType<typeof ClappingIcon>;
export default ClappingIcon;
