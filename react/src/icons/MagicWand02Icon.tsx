import React from 'react';
import config from '../config';

interface MagicWand02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MagicWand02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/magic-wand02)
 * @see {@link https://clicons.dev/icon/magic-wand02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MagicWand02Icon = React.forwardRef<SVGSVGElement, MagicWand02IconProps>(
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

    const iconData = [["path", { d: "M17.5 17.5L21.5 21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5.97185 3.79282L9.31786 4.92059C9.78049 5.08073 10.4825 4.97602 10.88 4.69283L13.2273 3.01883C14.729 1.949 15.972 2.58706 15.9733 4.44162L15.9862 7.58112C15.9884 8.11281 16.3582 8.7726 16.8087 9.05928L19.207 10.5629C21.104 11.7544 20.8884 13.1649 18.7263 13.713L15.7172 14.4729C15.1735 14.6099 14.6126 15.1709 14.4693 15.721L13.7096 18.7307C13.1679 20.8868 11.7449 21.1025 10.5601 19.2114L9.0567 16.8127C8.77007 16.3621 8.1104 15.9923 7.57881 15.9901L4.43989 15.9772C2.59198 15.9696 1.94773 14.7327 3.01737 13.2306L4.69105 10.8829C4.96789 10.4917 5.07258 9.78951 4.91247 9.3268L3.78491 5.98017C3.17623 4.16109 4.15941 3.17773 5.97185 3.79282Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

MagicWand02Icon.displayName = 'MagicWand02Icon';
export default MagicWand02Icon;
