import React from 'react';
import config from '../config';

interface ClipartsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ClipartsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cliparts)
 * @see {@link https://clicons.dev/icon/cliparts}
 */
const ClipartsIcon = React.forwardRef<SVGSVGElement, ClipartsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.0142 22C16.982 22 21.105 18.3826 21.8927 13.6382C22.0029 12.9744 22.058 12.6425 21.9099 12.1809C21.7618 11.7193 21.4596 11.417 20.8551 10.8126L13.1874 3.14488C12.583 2.54042 12.2807 2.23819 11.8191 2.0901C11.3575 1.94201 11.0256 1.99711 10.3618 2.10732C5.61741 2.89501 2 7.01797 2 11.9858C2 17.5165 6.4835 22 12.0142 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 2.5C12 7.21405 12 9.07107 13.4645 10.5355C14.9289 12 16.786 12 21.5 12'
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

ClipartsIcon.displayName = 'ClipartsIcon';
export default ClipartsIcon;
