/**
 * @component Invoice4Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/invoice4)
 * @see {@link https://clicons.dev/icon/invoice4} - Icon preview
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
declare const Invoice4Icon: import("svelte").Component<Props, {}, "">;
type Invoice4Icon = ReturnType<typeof Invoice4Icon>;
export default Invoice4Icon;
