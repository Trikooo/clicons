import React from 'react';
import config from '../config';

interface SendToMobile2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SendToMobile2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/send-to-mobile2)
 * @see {@link https://clicons.dev/icon/send-to-mobile2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SendToMobile2Icon = React.forwardRef<SVGSVGElement, SendToMobile2IconProps>(
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
      d: 'M17 6C16.9855 4.29344 16.8908 3.35264 16.2702 2.73223C15.5378 2 14.3591 2 12.0016 2H9.001C6.64351 2 5.46476 2 4.73238 2.73223C4 3.46447 4 4.64298 4 7V17C4 19.357 4 20.5355 4.73238 21.2678C5.46476 22 6.64351 22 9.001 22H12.0016C14.3591 22 15.5378 22 16.2702 21.2678C16.8908 20.6473 16.9855 19.7065 17 17.9999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 2H8.5L9 3H12L12.5 2Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M19 12.0337H12M17 9C17 9 19.0371 10.6469 19.8208 11.5533C19.9468 11.6991 20.0064 11.8627 19.9995 12.0253C19.9933 12.1711 19.9337 12.3162 19.8207 12.4468C19.0368 13.3531 17 15 17 15',
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

SendToMobile2Icon.displayName = 'SendToMobile2Icon';
export default SendToMobile2Icon;
