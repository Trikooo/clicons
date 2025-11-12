import React from 'react';
import config from '../config';

interface UsbMemory01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name UsbMemory01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/usb-memory01)
 * @see {@link https://clicons.dev/icon/usb-memory01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const UsbMemory01Icon = React.forwardRef<SVGSVGElement, UsbMemory01IconProps>(
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
      d: 'M4.03751 12.5387L9.9765 6.59975C11.3763 5.19992 12.0763 4.5 12.946 4.5C13.8157 4.5 14.5157 5.19992 15.9155 6.59975L17.4002 8.0845C18.8001 9.48434 19.5 10.1843 19.5 11.054C19.5 11.9237 18.8001 12.6237 17.4002 14.0235L11.4613 19.9625C9.41124 22.0125 6.08752 22.0125 4.03751 19.9625C1.9875 17.9125 1.9875 14.5888 4.03751 12.5387Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 17C8.5 16.1716 7.82843 15.5 7 15.5C6.17157 15.5 5.5 16.1716 5.5 17C5.5 17.8284 6.17157 18.5 7 18.5C7.82843 18.5 8.5 17.8284 8.5 17Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 5.35034L15.8832 3.96713C16.8613 2.98904 17.3503 2.5 17.958 2.5C18.5657 2.5 19.0548 2.98904 20.0329 3.96713C21.011 4.94521 21.5 5.43425 21.5 6.04195C21.5 6.64966 21.011 7.1387 20.0329 8.11678L18.6497 9.5',
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

UsbMemory01Icon.displayName = 'UsbMemory01Icon';
export default UsbMemory01Icon;
