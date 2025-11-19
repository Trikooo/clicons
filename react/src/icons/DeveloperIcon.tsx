import React from 'react';
import config from '../config';

interface DeveloperIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DeveloperIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/developer)
 * @see {@link https://clicons.dev/icon/developer}
 */
const DeveloperIcon = React.forwardRef<SVGSVGElement, DeveloperIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.1754 22V21.0117L15.1754 20.9908C15.1805 20.4457 15.6274 20.0051 16.1801 20L16.2551 19.9999C17.6867 19.9885 18.9166 18.9942 19.2087 17.612L19.2193 17.5601L19.7385 15L20.6798 14.5359C21.1836 14.2875 21.4354 14.1633 21.4899 13.9356C21.5444 13.7079 21.3755 13.4857 21.0376 13.0414L19.1301 10.5333C18.9403 10.2837 18.8454 10.1589 18.7945 10.0269C18.7437 9.89486 18.728 9.70775 18.6968 9.33353C18.3533 5.22708 14.8649 2 10.6123 2C6.13198 2 2.5 5.58172 2.5 10C2.5 12.7497 3.90669 15.1753 6.04911 16.6153M6.04911 16.6153V22M6.04911 16.6153C6.66896 17.0319 7.3504 17.366 8.07717 17.6016'
    }
  ],
  [
    'path',
    {
      d: 'M14 9L14.9199 9.79289C15.3066 10.1262 15.5 10.2929 15.5 10.5C15.5 10.7071 15.3066 10.8738 14.9199 11.2071L14 12'
    }
  ],
  [
    'path',
    {
      d: 'M7 9L6.08009 9.79289C5.69337 10.1262 5.5 10.2929 5.5 10.5C5.5 10.7071 5.69336 10.8738 6.08009 11.2071L7 12'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 8L9.5 13'
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

DeveloperIcon.displayName = 'DeveloperIcon';
export default DeveloperIcon;
