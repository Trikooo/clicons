import React from 'react';
import config from '../config';

interface RoadLocation2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RoadLocation2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/road-location2)
 * @see {@link https://clicons.dev/icon/road-location2}
 */
const RoadLocation2Icon = React.forwardRef<SVGSVGElement, RoadLocation2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5 15.082L16.5 15.082M13 15.082L11 15.082M7.5 15.082L5.5 15.082'
    }
  ],
  [
    'path',
    {
      d: 'M16 5.93261C16 8.60703 13.0435 10.548 12.214 11.0244C12.0802 11.1012 11.9198 11.1012 11.786 11.0244C10.9565 10.548 8 8.60703 8 5.93261C8 3.88203 9.79086 2.08203 12 2.08203C14.2091 2.08203 16 3.88203 16 5.93261Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 6.08203H12.009'
    }
  ],
  [
    'path',
    {
      d: 'M19 8.08203C19.7745 8.23191 20.3588 8.48205 20.8284 8.89953C22 9.94106 22 11.6174 22 14.97C22 18.3227 22 19.999 20.8284 21.0405C19.6569 22.082 17.7712 22.082 14 22.082H10C6.22876 22.082 4.34315 22.082 3.17157 21.0405C2 19.999 2 18.3226 2 14.97C2 11.6174 2 9.94106 3.17157 8.89952C3.64118 8.48205 4.2255 8.23191 5 8.08203'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

RoadLocation2Icon.displayName = 'RoadLocation2Icon';
export default RoadLocation2Icon;
