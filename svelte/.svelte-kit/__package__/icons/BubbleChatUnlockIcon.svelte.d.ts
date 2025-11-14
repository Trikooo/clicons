/**
 * @component BubbleChatUnlockIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bubble-chat-unlock)
 * @see {@link https://clicons.dev/icon/bubble-chat-unlock} - Icon preview
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
declare const BubbleChatUnlockIcon: import("svelte").Component<Props, {}, "">;
type BubbleChatUnlockIcon = ReturnType<typeof BubbleChatUnlockIcon>;
export default BubbleChatUnlockIcon;
