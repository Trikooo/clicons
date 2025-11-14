/**
 * @component ComputerUserIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/computer-user)
 * @see {@link https://clicons.dev/icon/computer-user} - Icon preview
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
declare const ComputerUserIcon: import("svelte").Component<Props, {}, "">;
type ComputerUserIcon = ReturnType<typeof ComputerUserIcon>;
export default ComputerUserIcon;
