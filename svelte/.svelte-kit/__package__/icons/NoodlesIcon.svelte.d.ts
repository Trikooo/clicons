/**
 * @component NoodlesIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/noodles)
 * @see {@link https://clicons.dev/icon/noodles} - Icon preview
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
declare const NoodlesIcon: import("svelte").Component<Props, {}, "">;
type NoodlesIcon = ReturnType<typeof NoodlesIcon>;
export default NoodlesIcon;
