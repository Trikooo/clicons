/**
 * @component MailReplyAll2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mail-reply-all2)
 * @see {@link https://clicons.dev/icon/mail-reply-all2} - Icon preview
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
declare const MailReplyAll2Icon: import("svelte").Component<Props, {}, "">;
type MailReplyAll2Icon = ReturnType<typeof MailReplyAll2Icon>;
export default MailReplyAll2Icon;
