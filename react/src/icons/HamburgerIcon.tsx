import React from 'react';
import config from '../config';

interface HamburgerIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HamburgerIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hamburger)
 * @see {@link https://clicons.dev/icon/hamburger} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HamburgerIcon = React.forwardRef<SVGSVGElement, HamburgerIconProps>(
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
      d: 'M14.8541 4H9.14593C6.6503 4 4.52873 5.68344 3.75294 8.02892C3.49753 8.80111 3.36982 9.18721 3.69065 9.59361C4.01149 10 4.53377 10 5.57833 10H18.4217C19.4662 10 19.9885 10 20.3093 9.59361C20.6302 9.18721 20.5025 8.80111 20.2471 8.02892C19.4713 5.68344 17.3497 4 14.8541 4Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 16H3.5C2.67157 16 2 15.3284 2 14.5C2 13.6716 2.67157 13 3.5 13H11.3944C11.7893 13 12.1753 13.1169 12.5038 13.3359L14.4453 14.6302C14.7812 14.8541 15.2188 14.8541 15.5547 14.6302L17.4962 13.3359C17.8247 13.1169 18.2107 13 18.6056 13H20.5C21.3284 13 22 13.6716 22 14.5C22 15.3284 21.3284 16 20.5 16H20M4 16L4.4319 17.7276C4.76578 19.0631 5.96573 20 7.34233 20H16.6577C18.0343 20 19.2342 19.0631 19.5681 17.7276L20 16M4 16H11M20 16H18.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.0078 7L14.9988 7',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 6.5L9.5 7.5',
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

HamburgerIcon.displayName = 'HamburgerIcon';
export default HamburgerIcon;
