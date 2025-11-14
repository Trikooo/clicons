/**
 * @component FileLinkIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/file-link)
 * @see {@link https://clicons.dev/icon/file-link} - Icon preview
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
declare const FileLinkIcon: import("svelte").Component<Props, {}, "">;
type FileLinkIcon = ReturnType<typeof FileLinkIcon>;
export default FileLinkIcon;
