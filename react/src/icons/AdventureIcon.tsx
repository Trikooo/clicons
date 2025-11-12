import React from 'react';
import config from '../config';

interface AdventureIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AdventureIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/adventure)
 * @see {@link https://clicons.dev/icon/adventure} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AdventureIcon = React.forwardRef<SVGSVGElement, AdventureIconProps>(
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
      d: 'M6.56457 19.5607C5.97878 20.1464 5.02903 20.1464 4.44325 19.5607C3.85746 18.9749 3.85746 18.0251 4.44325 17.4393C5.02903 16.8536 5.97878 16.8536 6.56457 17.4393C7.15035 18.0251 7.15035 18.9749 6.56457 19.5607Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.00391 12H6.37548C6.90591 12 7.41462 12.2107 7.78969 12.5858L11.4181 16.2142C11.7932 16.5893 12.0039 17.098 12.0039 17.6284V18',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10.5103 15L18.5559 8.37415C18.8887 8.10007 19.1248 7.7264 19.2294 7.30812L19.9938 4.25039C20.0307 4.10291 19.8971 3.96933 19.7496 4.0062L16.6919 4.77063C16.2736 4.8752 15.8999 5.11126 15.6258 5.44407L9 13.4897',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.9091 2.89255C12.86 2.29753 12.3355 2.00001 12.0007 2C11.6659 1.99999 11.1413 2.29748 10.0921 2.89247C9.07711 3.46803 8.01375 3.82383 6.97637 4.04312C4.91674 4.47852 3.88691 4.69622 3.44345 5.23327C3 5.77032 3 6.61265 3 8.29731V9.96205M12.0006 22C12.3126 22 12.6246 21.9587 12.9276 21.8762C13.4183 21.7426 13.8799 21.4552 14.8031 20.8804C16.8654 19.5964 17.8965 18.9545 18.6779 18.13C19.643 17.1117 20.3379 15.8876 20.7044 14.5603C20.9539 13.6568 20.9937 12.6829 21 11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 17.5L9.5 14.5',
      stroke: 'currentColor',
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

AdventureIcon.displayName = 'AdventureIcon';
export default AdventureIcon;
