/**
 * @component Ds3ToolIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ds3-tool)
 * @see {@link https://clicons.dev/icon/ds3-tool} - Icon preview
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
declare const Ds3ToolIcon: import("svelte").Component<Props, {}, "">;
type Ds3ToolIcon = ReturnType<typeof Ds3ToolIcon>;
export default Ds3ToolIcon;
