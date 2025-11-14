/**
 * @component ZshIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/zsh)
 * @see {@link https://clicons.dev/icon/zsh} - Icon preview
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
declare const ZshIcon: import("svelte").Component<Props, {}, "">;
type ZshIcon = ReturnType<typeof ZshIcon>;
export default ZshIcon;
