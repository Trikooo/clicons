import React from 'react';
import config from '../config';

interface MoneyReceiveSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MoneyReceiveSquareIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/money-receive-square)
 * @see {@link https://clicons.dev/icon/money-receive-square} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MoneyReceiveSquareIcon = React.forwardRef<SVGSVGElement, MoneyReceiveSquareIconProps>(
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
      d: 'M12.002 9.00708C10.8974 9.00708 10.002 9.67865 10.002 10.5071C10.002 11.3355 10.8974 12.0071 12.002 12.0071C13.1065 12.0071 14.002 12.6787 14.002 13.5071C14.002 14.3355 13.1065 15.0071 12.002 15.0071M12.002 9.00708C12.8728 9.00708 13.6136 9.42448 13.8881 10.0071M12.002 9.00708V8.00708M12.002 15.0071C11.1311 15.0071 10.3903 14.5897 10.1158 14.0071M12.002 15.0071V16.0071',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13 2.50708C13 2.50708 12.6839 2.50708 12 2.50708C7.52166 2.50708 5.28249 2.50708 3.89124 3.89833C2.5 5.28957 2.5 7.52874 2.5 12.0071C2.5 16.4854 2.5 18.7246 3.89124 20.1159C5.28249 21.5071 7.52166 21.5071 12 21.5071C16.4783 21.5071 18.7175 21.5071 20.1088 20.1159C21.5 18.7246 21.5 16.4854 21.5 12.0071C21.5 11.3232 21.5 11.0071 21.5 11.0071',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.4883 2.49292L17.3125 6.67112M16.4883 3.01468L16.6065 6.10617C16.6065 6.83481 17.0416 7.2888 17.8341 7.34606L20.9581 7.49292',
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

MoneyReceiveSquareIcon.displayName = 'MoneyReceiveSquareIcon';
export default MoneyReceiveSquareIcon;
