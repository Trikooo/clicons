import React from 'react';
import config from '../config';

interface Mp4IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Mp4Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mp4)
 * @see {@link https://clicons.dev/icon/mp4} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Mp4Icon = React.forwardRef<SVGSVGElement, Mp4IconProps>(
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
      d: 'M20 12.999V10.6559C20 9.83838 20 9.42963 19.8478 9.06208C19.6955 8.69454 19.4065 8.40551 18.8284 7.82745L14.0919 3.09091C13.593 2.59202 13.3436 2.34258 13.0345 2.19477C12.9702 2.16403 12.9044 2.13674 12.8372 2.11303C12.5141 1.99902 12.1614 1.99902 11.4558 1.99902C8.21082 1.99902 6.58831 1.99902 5.48933 2.8851C5.26731 3.0641 5.06508 3.26634 4.88607 3.48835C4 4.58733 4 6.20984 4 9.45487V12.999M13 2.49902V2.99902C13 5.82745 13 7.24166 13.8787 8.12034C14.7574 8.99902 16.1716 8.99902 19 8.99902H19.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 22.001V16.001L6 19.001L8 16.001V22.001M10.5 22.001V19.501M10.5 19.501V16.001H12.25C13.2165 16.001 14 16.7845 14 17.751C14 18.7175 13.2165 19.501 12.25 19.501H10.5ZM16.5 16.001V18.001C16.5 18.5533 16.9477 19.001 17.5 19.001H20M20 19.001V16.001M20 19.001V21.501',
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

Mp4Icon.displayName = 'Mp4Icon';
export default Mp4Icon;
