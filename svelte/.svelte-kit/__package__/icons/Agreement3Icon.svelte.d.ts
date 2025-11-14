/**
 * @component Agreement3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/agreement3)
 * @see {@link https://clicons.dev/icon/agreement3} - Icon preview
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
declare const Agreement3Icon: import("svelte").Component<Props, {}, "">;
type Agreement3Icon = ReturnType<typeof Agreement3Icon>;
export default Agreement3Icon;
