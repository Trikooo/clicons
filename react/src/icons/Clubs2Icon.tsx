import React from 'react';
import config from '../config';

interface Clubs2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Clubs2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/clubs2)
 * @see {@link https://clicons.dev/icon/clubs2}
 */
const Clubs2Icon = React.forwardRef<SVGSVGElement, Clubs2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 2C9.79086 2 8 3.8529 8 6.13856C8 6.89237 8.19479 7.59911 8.53513 8.20784C5.9581 7.52158 3 9.51116 3 12.3464C3 15.5508 6.13941 17.0241 8.81012 16.3268C9.67373 16.1013 10.1055 15.9886 10.2279 16.1211C10.696 16.6279 9.34611 19.1578 9.10267 19.6578C8.64426 20.5995 8.41506 21.0703 8.59267 21.3642C9.01463 22.0625 14.8121 22.3493 15.4073 21.3642C15.5849 21.0703 15.3557 20.5995 14.8973 19.6578C14.6539 19.1578 13.304 16.6279 13.7721 16.1211C13.8945 15.9886 14.3263 16.1013 15.1899 16.3268C17.8488 17.021 21 15.5187 21 12.3464C21 9.53108 18.0333 7.52389 15.4649 8.20784C15.8052 7.59911 16 6.89237 16 6.13856C16 3.8529 14.2091 2 12 2Z'
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

Clubs2Icon.displayName = 'Clubs2Icon';
export default Clubs2Icon;
