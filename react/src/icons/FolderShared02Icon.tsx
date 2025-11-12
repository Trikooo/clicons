import React from 'react';
import config from '../config';

interface FolderShared02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name FolderShared02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/folder-shared02)
 * @see {@link https://clicons.dev/icon/folder-shared02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const FolderShared02Icon = React.forwardRef<SVGSVGElement, FolderShared02IconProps>(
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
      d: 'M18.1574 14.171C18.4037 14.6625 18.9124 15 19.4999 15C20.3288 15 21.0007 14.3284 21.0007 13.5C21.0007 12.6716 20.3288 12 19.4999 12C18.6711 12 17.9992 12.6716 17.9992 13.5C17.9992 13.7412 18.0561 13.9691 18.1574 14.171ZM18.1574 14.171L14.8395 15.829M14.8395 15.829C14.5931 15.3375 14.0844 15 13.4969 15C12.668 15 11.9961 15.6716 11.9961 16.5C11.9961 17.3284 12.668 18 13.4969 18C14.0844 18 14.5931 17.6625 14.8395 17.171M14.8395 15.829C14.9407 16.0309 14.9976 16.2588 14.9976 16.5C14.9976 16.7412 14.9407 16.9691 14.8395 17.171M14.8395 17.171L18.1574 18.829M18.1574 18.829C18.0561 19.0309 17.9992 19.2588 17.9992 19.5C17.9992 20.3284 18.6711 21 19.4999 21C20.3288 21 21.0007 20.3284 21.0007 19.5C21.0007 18.6716 20.3288 18 19.4999 18C18.9124 18 18.4037 18.3375 18.1574 18.829Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.0244 21H12.0222C7.29769 21 4.93543 21 3.46772 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38116 4.53806C2.65287 4.05227 3.0546 3.65142 3.54148 3.38032C4.22449 3 5.13474 3 6.95525 3C8.12158 3 8.70475 3 9.21524 3.19101C10.3808 3.62712 10.8614 4.68358 11.3874 5.73313L12.0222 7M8.01332 7H16.7827C18.8941 7 19.9498 7 20.7081 7.50559C21.0364 7.72447 21.3183 8.00572 21.5377 8.33329C21.8193 8.75388 21.9444 9.26614 22 10',
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

FolderShared02Icon.displayName = 'FolderShared02Icon';
export default FolderShared02Icon;
