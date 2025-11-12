import React from 'react';
import config from '../config';

interface PyramidIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PyramidIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pyramid)
 * @see {@link https://clicons.dev/icon/pyramid} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PyramidIcon = React.forwardRef<SVGSVGElement, PyramidIconProps>(
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
      d: 'M12 2V22',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.8692 13.6759L21.9887 17.5864M21.9887 17.5864L21.9944 17.5895M21.9887 17.5864C22.0642 17.1494 21.7569 16.6584 21.1866 15.7472L13.7843 3.91929C12.9835 2.63976 12.5831 2 12 2C11.4169 2 11.0165 2.63976 10.2157 3.91929L2.81338 15.7472C2.24312 16.6584 1.93582 17.1494 2.01127 17.5864M21.9887 17.5864C21.9824 17.6232 21.9733 17.6597 21.9614 17.696C21.8087 18.1627 21.267 18.3791 20.1838 18.8118L12.7814 21.7688C12.3956 21.9229 12.2026 22 12 22C11.7974 22 11.6045 21.9229 11.2186 21.7688L3.8162 18.8118C2.73296 18.3791 2.19134 18.1627 2.0386 17.696C2.02672 17.6597 2.01764 17.6232 2.01127 17.5864M2.00558 17.5895L2.01127 17.5864M2.01127 17.5864L9.13079 13.6759',
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

PyramidIcon.displayName = 'PyramidIcon';
export default PyramidIcon;
