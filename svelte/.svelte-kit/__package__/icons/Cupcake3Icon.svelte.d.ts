/**
 * @component Cupcake3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cupcake3)
 * @see {@link https://clicons.dev/icon/cupcake3} - Icon preview
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
declare const Cupcake3Icon: import("svelte").Component<Props, {}, "">;
type Cupcake3Icon = ReturnType<typeof Cupcake3Icon>;
export default Cupcake3Icon;
