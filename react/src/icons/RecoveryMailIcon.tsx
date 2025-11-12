import React from 'react';
import config from '../config';

interface RecoveryMailIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name RecoveryMailIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/recovery-mail)
 * @see {@link https://clicons.dev/icon/recovery-mail} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const RecoveryMailIcon = React.forwardRef<SVGSVGElement, RecoveryMailIconProps>(
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
      d: 'M7 8L9.94202 9.73943C11.6572 10.7535 12.3428 10.7535 14.058 9.73943L17 8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M22 10.0262C21.9346 6.95987 21.9019 5.42671 20.7698 4.29099C19.6378 3.15527 18.0623 3.11571 14.9114 3.03658C12.9693 2.98781 11.0464 2.98781 9.10442 3.03657C5.95344 3.11569 4.37796 3.15525 3.24593 4.29098C2.11391 5.4267 2.0812 6.95986 2.01578 10.0262C1.99474 11.0121 1.99474 11.9922 2.01578 12.9782C2.0812 16.0445 2.11392 17.5777 3.24594 18.7134C4.37796 19.8491 5.95345 19.8887 9.10443 19.9678C9.74025 19.9837 10.374 19.9945 11.0071 20',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.6632 15.9994C21.1015 14.8169 19.8962 13.9994 18.5 13.9994C16.567 13.9994 15 15.5664 15 17.4994C15 19.4323 16.567 20.9994 18.5 20.9994C20.0853 20.9994 21.5695 19.9454 22 18.5M21.6632 15.9994V13.5M21.6632 15.9994L19.4277 16.1574',
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

RecoveryMailIcon.displayName = 'RecoveryMailIcon';
export default RecoveryMailIcon;
