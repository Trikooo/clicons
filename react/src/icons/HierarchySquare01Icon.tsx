import React from 'react';
import config from '../config';

interface HierarchySquare01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HierarchySquare01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hierarchy-square01)
 * @see {@link https://clicons.dev/icon/hierarchy-square01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HierarchySquare01Icon = React.forwardRef<SVGSVGElement, HierarchySquare01IconProps>(
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
      d: 'M14 19.5H13C10.1716 19.5 8.75736 19.5 7.87868 18.6213C7 17.7426 7 16.3284 7 13.5V11.5M7 8V11.5M7 11.5H14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 11.5C14 10.3215 14 9.73223 14.3515 9.36612C14.7029 9 15.2686 9 16.4 9H17.6C18.7314 9 19.2971 9 19.6485 9.36612C20 9.73223 20 10.3215 20 11.5C20 12.6785 20 13.2678 19.6485 13.6339C19.2971 14 18.7314 14 17.6 14H16.4C15.2686 14 14.7029 14 14.3515 13.6339C14 13.2678 14 12.6785 14 11.5Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 19.5C14 18.3215 14 17.7322 14.3515 17.3661C14.7029 17 15.2686 17 16.4 17H17.6C18.7314 17 19.2971 17 19.6485 17.3661C20 17.7322 20 18.3215 20 19.5C20 20.6785 20 21.2678 19.6485 21.6339C19.2971 22 18.7314 22 17.6 22H16.4C15.2686 22 14.7029 22 14.3515 21.6339C14 21.2678 14 20.6785 14 19.5Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.28571 2H8.71429C10.7888 2 11 3.10993 11 5C11 6.89007 10.7888 8 8.71429 8H5.28571C3.2112 8 3 6.89007 3 5C3 3.10993 3.2112 2 5.28571 2Z',
      stroke: 'currentColor',
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

HierarchySquare01Icon.displayName = 'HierarchySquare01Icon';
export default HierarchySquare01Icon;
