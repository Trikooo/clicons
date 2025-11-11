import React from 'react';
import config from '../config';

interface MailLove02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MailLove02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mail-love02)
 * @see {@link https://clicons.dev/icon/mail-love02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MailLove02Icon = React.forwardRef<SVGSVGElement, MailLove02IconProps>(
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

    const iconData = [["path", { d: "M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.5 19.4959C11.0337 19.4898 9.56682 19.5077 9.09883 19.4959C5.95033 19.4166 4.37608 19.377 3.24496 18.2394C2.11383 17.1018 2.08114 15.5661 2.01577 12.4947C1.99475 11.5071 1.99474 10.5254 2.01576 9.53781C2.08114 6.46642 2.11382 4.93072 3.24495 3.79312C4.37608 2.65551 5.95033 2.61589 9.09882 2.53663C11.0393 2.48779 12.9607 2.48779 14.9012 2.53664C18.0497 2.6159 19.6239 2.65553 20.755 3.79313C21.8862 4.93073 21.9189 6.46643 21.9842 9.53783C21.9983 10.1973 22.0029 10.8542 21.9982 11.512", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M15.015 14.8866C16.0876 14.2469 17.0238 14.5047 17.5863 14.9153C17.8169 15.0837 17.9322 15.1679 18 15.1679C18.0678 15.1679 18.1831 15.0837 18.4137 14.9153C18.9762 14.5047 19.9124 14.2469 20.985 14.8866C22.3928 15.7261 22.7113 18.4958 19.4642 20.8324C18.8457 21.2775 18.5365 21.5 18 21.5C17.4635 21.5 17.1543 21.2775 16.5358 20.8324C13.2887 18.4958 13.6072 15.7261 15.015 14.8866Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]];

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

MailLove02Icon.displayName = 'MailLove02Icon';
export default MailLove02Icon;
