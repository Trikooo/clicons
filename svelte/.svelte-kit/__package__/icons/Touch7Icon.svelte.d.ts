/**
 * @component Touch7Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/touch7)
 * @see {@link https://clicons.dev/icon/touch7} - Icon preview
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
declare const Touch7Icon: import("svelte").Component<Props, {}, "">;
type Touch7Icon = ReturnType<typeof Touch7Icon>;
export default Touch7Icon;
