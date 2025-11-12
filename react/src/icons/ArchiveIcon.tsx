import React from 'react';
import config from '../config';

interface ArchiveIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ArchiveIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/archive)
 * @see {@link https://clicons.dev/icon/archive} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ArchiveIcon = React.forwardRef<SVGSVGElement, ArchiveIconProps>(
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
      d: 'M10.0001 17V7C10.0001 5.11438 10.0001 4.17157 9.41427 3.58579C8.82849 3 7.88568 3 6.00005 3C4.11444 3 3.17163 3 2.58584 3.58578C2.00006 4.17157 2.00005 5.11437 2.00004 6.99998L2 17C1.99999 18.8856 1.99999 19.8284 2.58577 20.4142C3.17156 21 4.11438 21 6.00003 21C7.88567 21 8.82849 21 9.41427 20.4142C10.0001 19.8284 10.0001 18.8856 10.0001 17Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.4558 15.7091L19.0473 7.19224C18.572 5.51165 18.3343 4.67135 17.6838 4.2617C17.6312 4.22861 17.5772 4.19796 17.5218 4.16986C16.8358 3.82199 15.9877 4.04691 14.2916 4.49674C12.5529 4.95783 11.6836 5.18838 11.2632 5.84738C11.2293 5.90053 11.198 5.95524 11.1693 6.01134C10.8134 6.70684 11.057 7.5682 11.5442 9.2909L13.9527 17.8078C14.428 19.4884 14.6657 20.3287 15.3162 20.7383C15.3688 20.7714 15.4228 20.802 15.4782 20.8301C16.1642 21.178 17.0123 20.9531 18.7084 20.5033C20.4471 20.0422 21.3164 19.8116 21.7368 19.1526C21.7707 19.0995 21.802 19.0448 21.8307 18.9887C22.1866 18.2932 21.943 17.4318 21.4558 15.7091Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 17H6.00898',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M2 7H10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.9912 17.0034L17.9999 17.0011',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M12 9.00019L19 7',
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

ArchiveIcon.displayName = 'ArchiveIcon';
export default ArchiveIcon;
