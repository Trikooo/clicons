import React from 'react';
import config from '../config';

interface Select2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Select2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/select2)
 * @see {@link https://clicons.dev/icon/select2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Select2Icon = React.forwardRef<SVGSVGElement, Select2IconProps>(
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
      d: 'M5 2V8M2 5H8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M20 18L20 7M7 20H18M18 5H12M5 12V18',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 5C18 4.05719 18 3.58579 18.2929 3.29289C18.5858 3 19.0572 3 20 3C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7C19.0572 7 18.5858 7 18.2929 6.70711C18 6.41421 18 5.94281 18 5Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 20C18 19.0572 18 18.5858 18.2929 18.2929C18.5858 18 19.0572 18 20 18C20.9428 18 21.4142 18 21.7071 18.2929C22 18.5858 22 19.0572 22 20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22C19.0572 22 18.5858 22 18.2929 21.7071C18 21.4142 18 20.9428 18 20Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 20C3 19.0572 3 18.5858 3.29289 18.2929C3.58579 18 4.05719 18 5 18C5.94281 18 6.41421 18 6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22C4.05719 22 3.58579 22 3.29289 21.7071C3 21.4142 3 20.9428 3 20Z',
      stroke: 'currentColor',
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

Select2Icon.displayName = 'Select2Icon';
export default Select2Icon;
