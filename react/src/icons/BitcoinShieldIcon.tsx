import React from 'react';
import config from '../config';

interface BitcoinShieldIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BitcoinShieldIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bitcoin-shield)
 * @see {@link https://clicons.dev/icon/bitcoin-shield} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BitcoinShieldIcon = React.forwardRef<SVGSVGElement, BitcoinShieldIconProps>(
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
      d: 'M10.125 14.5001L10.125 8.50012M12 8.50012V7.00012M12 16.0001V14.5001M10.125 11.5001H13.875M13.875 11.5001C14.4963 11.5001 15 12.0038 15 12.6251V13.3751C15 13.9964 14.4963 14.5001 13.875 14.5001H9M13.875 11.5001C14.4963 11.5001 15 10.9964 15 10.3751V9.62512C15 9.0038 14.4963 8.50012 13.875 8.50012H9',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21 11.1835V8.28047C21 6.64047 21 5.82047 20.5959 5.28547C20.1918 4.75048 19.2781 4.49075 17.4507 3.97128C16.2022 3.61638 15.1016 3.18881 14.2223 2.79847C13.0234 2.26628 12.424 2.00018 12 2.00018C11.576 2.00018 10.9766 2.26628 9.77771 2.79847C8.89839 3.18881 7.79784 3.61638 6.54933 3.97128C4.72193 4.49075 3.80822 4.75048 3.40411 5.28547C3 5.82047 3 6.64047 3 8.28047V11.1835C3 16.8087 8.06277 20.1837 10.594 21.5196C11.2011 21.84 11.5046 22.0002 12 22.0002C12.4954 22.0002 12.7989 21.84 13.406 21.5196C15.9372 20.1837 21 16.8087 21 11.1835Z',
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

BitcoinShieldIcon.displayName = 'BitcoinShieldIcon';
export default BitcoinShieldIcon;
