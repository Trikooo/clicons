import React from 'react';
import config from '../config';

interface MailReplyIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MailReplyIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mail-reply)
 * @see {@link https://clicons.dev/icon/mail-reply} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MailReplyIcon = React.forwardRef<SVGSVGElement, MailReplyIconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M1.99989 5L8.91291 8.92462C11.4386 10.3585 12.5612 10.3585 15.0869 8.92462L21.9999 5',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.9193 11.0333C21.9193 10.54 21.9141 10.0467 21.9036 9.55195C21.8386 6.47439 21.806 4.93561 20.6795 3.79572C19.5528 2.65584 17.985 2.61614 14.8491 2.53671C12.9164 2.48776 11.0028 2.48776 9.07012 2.5367C5.93431 2.61611 4.3664 2.65582 3.23983 3.79571C2.11325 4.9356 2.08071 6.47438 2.01559 9.55194C1.99465 10.5415 1.99466 11.5252 2.0156 12.5147C2.08071 15.5924 2.11326 17.1311 3.23984 18.271C4.3664 19.4109 5.93431 19.4505 9.07013 19.5299C10.0365 19.5544 10.998 19.5667 11.9596 19.5667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M22.0001 21.5003C21.884 18.9758 21.9869 18.0573 20.3438 16.8793C19.5362 16.3003 17.9115 15.9188 15.7177 16.1248M17.4519 13.5928L15.1552 15.7464C14.9611 15.9406 14.9597 16.2561 15.1519 16.4521L17.4519 18.6401',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ]
];

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

MailReplyIcon.displayName = 'MailReplyIcon';
export default MailReplyIcon;
