import React from 'react';
import config from '../config';

interface RotateLeft6IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name RotateLeft6Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/rotate-left6)
 * @see {@link https://clicons.dev/icon/rotate-left6} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const RotateLeft6Icon = React.forwardRef<SVGSVGElement, RotateLeft6IconProps>(
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
      d: 'M6.50941 10.2664C5.93712 9.87143 5.79803 9.09395 6.19876 8.52985C6.59948 7.96576 7.38827 7.82867 7.96057 8.22365L13.4871 12.0379L14.4103 12.7096L14.3806 10.2989C14.3806 9.46063 15.12 8.80838 15.9653 8.90097C16.6122 8.97181 17.1284 9.46503 17.2205 10.1L17.8195 14.2329C17.9554 15.1709 18.0234 15.6398 17.9893 16.09C17.9373 16.7768 17.713 17.44 17.3365 18.0202C17.0898 18.4005 16.7499 18.7355 16.0702 19.4054L14.6751 20.7806C13.2399 22.1952 10.9859 22.4013 9.31124 21.2711L5.26464 18.5402L3.53759 17.3482C2.96529 16.9532 2.82621 16.1758 3.22693 15.6117C3.62766 15.0476 4.41645 14.9105 4.98874 15.3055M6.50941 10.2664L5.12777 9.31284C4.55547 8.91786 3.76668 9.05495 3.36596 9.61904C2.96523 10.1831 3.10432 10.9606 3.67661 11.3556L5.05826 12.3091M6.50941 10.2664L9.61811 12.4119M4.98874 15.3055L3.6071 14.3519C3.0348 13.9569 2.89572 13.1794 3.29644 12.6153C3.69717 12.0512 4.48596 11.9141 5.05826 12.3091M4.98874 15.3055L6.7158 16.4974M5.05826 12.3091L8.16695 14.4547',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.36287 4.96465C9.75977 5.3603 11.4864 5.24616 12.1233 5.16671M9.36287 4.96465C8.96598 4.56901 8.95462 2.63697 9.03431 2.00208M9.36287 4.96465C10.3839 3.19642 14.4435 0.375874 18.4719 3.19642C20.4185 4.55942 20.6932 5.41838 21.0011 5.99381',
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

RotateLeft6Icon.displayName = 'RotateLeft6Icon';
export default RotateLeft6Icon;
