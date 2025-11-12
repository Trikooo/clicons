import React from 'react';
import config from '../config';

interface CallEnd04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CallEnd04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/call-end04)
 * @see {@link https://clicons.dev/icon/call-end04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CallEnd04Icon = React.forwardRef<SVGSVGElement, CallEnd04IconProps>(
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
      d: 'M15.9212 9.24433L15.931 9.30236C16.0456 9.98064 16.1029 10.3198 16.2809 10.5938C16.3339 10.6753 16.3943 10.7518 16.4613 10.8221C16.6866 11.0586 17.0029 11.1923 17.6356 11.4598C18.5863 11.8617 19.0616 12.0627 19.5176 11.9827C19.6515 11.9592 19.7818 11.9184 19.9053 11.8613C20.3256 11.6669 20.605 11.2259 21.1637 10.344C21.7465 9.42428 22.0378 8.9644 21.9961 8.43957C21.9867 8.32195 21.9561 8.17279 21.9184 8.06099C21.7504 7.56215 21.3553 7.29135 20.5653 6.74976C15.2168 3.0834 8.78319 3.08342 3.43474 6.74976C2.64467 7.29135 2.24964 7.56215 2.08155 8.06099C2.04388 8.17279 2.0133 8.32195 2.00394 8.43958C1.96217 8.96441 2.25354 9.42428 2.83628 10.344C3.39504 11.2259 3.67442 11.6669 4.09473 11.8613C4.21816 11.9184 4.34846 11.9592 4.48236 11.9827C4.93835 12.0627 5.41371 11.8617 6.36443 11.4598C6.99706 11.1923 7.31337 11.0586 7.5387 10.8221C7.60574 10.7518 7.66613 10.6753 7.7191 10.5938C7.89713 10.3198 7.95443 9.98064 8.06903 9.30236L8.07883 9.24433C8.19712 8.54421 8.25626 8.19414 8.51567 7.87314C8.55197 7.82822 8.61802 7.75692 8.66002 7.71731C8.96021 7.43423 9.22512 7.36865 9.75492 7.23749C11.1819 6.88423 12.8181 6.88423 14.2451 7.23749C14.7749 7.36865 15.0398 7.43423 15.34 7.71731C15.382 7.75692 15.448 7.82822 15.4843 7.87314C15.7437 8.19414 15.8029 8.54421 15.9212 9.24433Z',
      stroke: 'currentColor',
      strokeLinecap: 'square',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.49976 17.5L11.9998 20L14.4998 17.5M11.9998 12.5V19.3912',
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

CallEnd04Icon.displayName = 'CallEnd04Icon';
export default CallEnd04Icon;
