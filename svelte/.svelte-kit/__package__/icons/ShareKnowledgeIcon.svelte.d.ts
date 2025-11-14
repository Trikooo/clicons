/**
 * @component ShareKnowledgeIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/share-knowledge)
 * @see {@link https://clicons.dev/icon/share-knowledge} - Icon preview
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
declare const ShareKnowledgeIcon: import("svelte").Component<Props, {}, "">;
type ShareKnowledgeIcon = ReturnType<typeof ShareKnowledgeIcon>;
export default ShareKnowledgeIcon;
