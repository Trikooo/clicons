import React from 'react';
import config from '../config';

interface LassoTool2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LassoTool2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/lasso-tool2)
 * @see {@link https://clicons.dev/icon/lasso-tool2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LassoTool2Icon = React.forwardRef<SVGSVGElement, LassoTool2IconProps>(
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
      d: 'M5.5 15.5L2.61096 5.5905C2.04631 3.6603 1.76399 2.6952 2.24574 2.21566C2.72749 1.73612 3.60877 2.105 5.37133 2.84278L11.692 5.48851C13.1841 6.11304 13.8363 6.06315 15.2313 5.24565L18.7973 3.15593C20.3091 2.26998 21.065 1.827 21.5902 2.19348C22.1155 2.55996 22.0396 3.47742 21.8877 5.31232L21.3335 12.0109C21.1225 14.5617 20.6625 15.2995 18.1681 15.9572L10 18',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.98703 17C9.98703 18.1046 8.87064 19 7.49351 19C6.11638 19 5 18.1046 5 17C5 15.8954 6.11638 15 7.49351 15C8.87064 15 9.98703 15.8954 9.98703 17ZM9.98703 17C10.0493 17.7724 10.0064 20.5 7.00254 22',
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

LassoTool2Icon.displayName = 'LassoTool2Icon';
export default LassoTool2Icon;
