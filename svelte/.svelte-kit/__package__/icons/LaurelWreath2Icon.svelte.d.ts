/**
 * @component LaurelWreath2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/laurel-wreath2)
 * @see {@link https://clicons.dev/icon/laurel-wreath2} - Icon preview
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
declare const LaurelWreath2Icon: import("svelte").Component<Props, {}, "">;
type LaurelWreath2Icon = ReturnType<typeof LaurelWreath2Icon>;
export default LaurelWreath2Icon;
