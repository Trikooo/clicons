/**
 * @component CursorLoading2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cursor-loading2)
 * @see {@link https://clicons.dev/icon/cursor-loading2} - Icon preview
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
declare const CursorLoading2Icon: import("svelte").Component<Props, {}, "">;
type CursorLoading2Icon = ReturnType<typeof CursorLoading2Icon>;
export default CursorLoading2Icon;
