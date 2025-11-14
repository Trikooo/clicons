/**
 * @component TextNumberSignIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/text-number-sign)
 * @see {@link https://clicons.dev/icon/text-number-sign} - Icon preview
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
declare const TextNumberSignIcon: import("svelte").Component<Props, {}, "">;
type TextNumberSignIcon = ReturnType<typeof TextNumberSignIcon>;
export default TextNumberSignIcon;
