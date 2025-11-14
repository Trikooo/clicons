/**
 * @component AiBrain3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ai-brain3)
 * @see {@link https://clicons.dev/icon/ai-brain3} - Icon preview
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
declare const AiBrain3Icon: import("svelte").Component<Props, {}, "">;
type AiBrain3Icon = ReturnType<typeof AiBrain3Icon>;
export default AiBrain3Icon;
