/**
 * @component Vynil2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/vynil2)
 * @see {@link https://clicons.dev/icon/vynil2} - Icon preview
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
declare const Vynil2Icon: import("svelte").Component<Props, {}, "">;
type Vynil2Icon = ReturnType<typeof Vynil2Icon>;
export default Vynil2Icon;
