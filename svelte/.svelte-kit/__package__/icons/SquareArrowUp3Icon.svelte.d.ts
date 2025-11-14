/**
 * @component SquareArrowUp3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/square-arrow-up3)
 * @see {@link https://clicons.dev/icon/square-arrow-up3} - Icon preview
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
declare const SquareArrowUp3Icon: import("svelte").Component<Props, {}, "">;
type SquareArrowUp3Icon = ReturnType<typeof SquareArrowUp3Icon>;
export default SquareArrowUp3Icon;
