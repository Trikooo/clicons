/**
 * @component DocumentAttachmentIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/document-attachment)
 * @see {@link https://clicons.dev/icon/document-attachment} - Icon preview
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
declare const DocumentAttachmentIcon: import("svelte").Component<Props, {}, "">;
type DocumentAttachmentIcon = ReturnType<typeof DocumentAttachmentIcon>;
export default DocumentAttachmentIcon;
