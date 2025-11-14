/**
 * @component TypescriptIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/typescript)
 * @see {@link https://clicons.dev/icon/typescript} - Icon preview
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
declare const TypescriptIcon: import("svelte").Component<Props, {}, "">;
type TypescriptIcon = ReturnType<typeof TypescriptIcon>;
export default TypescriptIcon;
