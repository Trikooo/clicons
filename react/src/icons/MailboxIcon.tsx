import React from 'react';
import config from '../config';

interface MailboxIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MailboxIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mailbox)
 * @see {@link https://clicons.dev/icon/mailbox} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MailboxIcon = React.forwardRef<SVGSVGElement, MailboxIconProps>(
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
      d: 'M6.5 9H8.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 8V4C17.5 2.89543 18.3954 2 19.5 2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 18L12.5 22',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 5.15889C16.5351 5 15.2591 5 13.375 5H10.625C7.70671 5 6.24757 5 5.14302 5.59039C4.27088 6.05656 3.55656 6.77088 3.09039 7.64302C2.5 8.74757 2.5 10.2067 2.5 13.125C2.5 14.876 2.5 15.7515 2.85424 16.4142C3.13394 16.9375 3.56253 17.3661 4.08581 17.6458C4.74854 18 5.62403 18 7.375 18H16.625C18.376 18 19.2515 18 19.9142 17.6458C20.4375 17.3661 20.8661 16.9375 21.1458 16.4142C21.5 15.7515 21.5 14.876 21.5 13.125C21.5 10.2067 21.5 8.74757 20.9096 7.64302C20.7356 7.31755 20.5271 7.01406 20.2887 6.73725',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.5006 18V11C12.5006 10.071 12.5006 9.60649 12.439 9.21782C12.1002 7.07836 10.4222 5.40041 8.28276 5.06155C8.2009 5.04859 8.11566 5.03835 8.02344 5.03027',
      stroke: 'currentColor',
      strokeLinecap: 'round',
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

MailboxIcon.displayName = 'MailboxIcon';
export default MailboxIcon;
