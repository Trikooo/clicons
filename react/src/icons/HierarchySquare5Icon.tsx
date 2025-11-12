import React from 'react';
import config from '../config';

interface HierarchySquare5IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HierarchySquare5Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hierarchy-square5)
 * @see {@link https://clicons.dev/icon/hierarchy-square5} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HierarchySquare5Icon = React.forwardRef<SVGSVGElement, HierarchySquare5IconProps>(
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
      d: 'M15 12C15 13.4142 15 14.1213 15.5126 14.5607C16.0251 15 16.8501 15 18.5 15C20.1499 15 20.9749 15 21.4874 14.5607C22 14.1213 22 13.4142 22 12C22 10.5858 22 9.87868 21.4874 9.43934C20.9749 9 20.1499 9 18.5 9C16.8501 9 16.0251 9 15.5126 9.43934C15 9.87868 15 10.5858 15 12Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 19C2 20.4142 2 21.1213 2.41005 21.5607C2.8201 22 3.48007 22 4.8 22H6.2C7.51993 22 8.1799 22 8.58995 21.5607C9 21.1213 9 20.4142 9 19C9 17.5858 9 16.8787 8.58995 16.4393C8.1799 16 7.51993 16 6.2 16H4.8C3.48007 16 2.8201 16 2.41005 16.4393C2 16.8787 2 17.5858 2 19Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 5C2 6.41421 2 7.12132 2.41005 7.56066C2.8201 8 3.48007 8 4.8 8L6.2 8C7.51993 8 8.1799 8 8.58995 7.56066C9 7.12132 9 6.41421 9 5C9 3.58579 9 2.87868 8.58995 2.43934C8.1799 2 7.51993 2 6.2 2L4.8 2C3.48007 2 2.8201 2 2.41005 2.43934C2 2.87868 2 3.58579 2 5Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 12.001L12 7.95383C12 6.07993 11.0828 5.23846 9 5M12 12.001L12 16.0481C12 17.8155 11.221 18.7415 9 19M12 12.001L15 12.001',
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

HierarchySquare5Icon.displayName = 'HierarchySquare5Icon';
export default HierarchySquare5Icon;
