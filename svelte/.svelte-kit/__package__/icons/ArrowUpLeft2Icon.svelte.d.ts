/**
 * @component ArrowUpLeft2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/arrow-up-left2)
 * @see {@link https://clicons.dev/icon/arrow-up-left2} - Icon preview
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
declare const ArrowUpLeft2Icon: import("svelte").Component<Props, {}, "">;
type ArrowUpLeft2Icon = ReturnType<typeof ArrowUpLeft2Icon>;
export default ArrowUpLeft2Icon;
