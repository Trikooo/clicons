import React from 'react';
import config from '../config';

interface Satellite2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Satellite2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/satellite2)
 * @see {@link https://clicons.dev/icon/satellite2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Satellite2Icon = React.forwardRef<SVGSVGElement, Satellite2IconProps>(
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
      d: 'M16.201 7.79899C17.8024 9.40034 20.3987 9.40034 22 7.79899L16.201 2C14.5997 3.60135 14.5997 6.19764 16.201 7.79899Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 8L14.5 9.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.8322 13.001C15.4344 12.3988 15.7354 12.0977 15.7354 11.7236C15.7354 11.3494 15.4344 11.0484 14.8322 10.4462L13.5548 9.16879C12.9526 8.56662 12.6515 8.26553 12.2774 8.26553C11.9033 8.26553 11.6022 8.56662 11 9.16879L6.79367 13.3751C5.73544 14.4334 5.73544 16.1491 6.79367 17.2073C7.8519 18.2656 9.56763 18.2656 10.6259 17.2073L14.8322 13.001Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.4688 16.8563L16.8563 15.4688C17.5104 14.8147 17.8374 14.4877 18.2438 14.4877C18.6502 14.4877 18.9773 14.8147 19.6314 15.4688L21.0189 16.8563C21.673 17.5104 22 17.8374 22 18.2438C22 18.6502 21.673 18.9773 21.0189 19.6314L19.6314 21.0189C18.9773 21.673 18.6502 22 18.2438 22C17.8374 22 17.5104 21.673 16.8563 21.0189L15.4688 19.6314C14.8147 18.9773 14.4877 18.6502 14.4877 18.2438C14.4877 17.8374 14.8147 17.5104 15.4688 16.8563Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.98112 4.36864L4.36864 2.98112C5.02273 2.32704 5.34977 2 5.75616 2C6.16256 2 6.4896 2.32704 7.14368 2.98112L8.5312 4.36864C9.18528 5.02273 9.51233 5.34977 9.51233 5.75616C9.51233 6.16256 9.18528 6.4896 8.5312 7.14368L7.14368 8.5312C6.4896 9.18528 6.16256 9.51233 5.75616 9.51233C5.34977 9.51233 5.02273 9.18528 4.36864 8.5312L2.98112 7.14368C2.32704 6.4896 2 6.16256 2 5.75616C2 5.34977 2.32704 5.02273 2.98112 4.36864Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 16L14 14M9.99999 10L8 8',
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

Satellite2Icon.displayName = 'Satellite2Icon';
export default Satellite2Icon;
