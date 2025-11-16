import React from 'react';
import config from '../config';

interface IdentificationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name IdentificationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/identification)
 * @see {@link https://clicons.dev/icon/identification}
 */
const IdentificationIcon = React.forwardRef<SVGSVGElement, IdentificationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.13518 2.49991C6.4689 2.56066 4.91156 2.81447 3.8475 3.87483C2.91622 4.80288 2.60492 6.10747 2.50085 8.19991M14.8665 2.49991C17.5328 2.56066 19.0902 2.81447 20.1542 3.87483C21.0855 4.80288 21.3968 6.10747 21.5009 8.19991M14.8665 21.4999C17.5328 21.4392 19.0902 21.1853 20.1542 20.125C21.0855 19.1969 21.3968 17.8923 21.5009 15.7999M9.13518 21.4999C6.4689 21.4392 4.91156 21.1853 3.8475 20.125C2.91622 19.1969 2.60492 17.8923 2.50085 15.7999'
    }
  ],
  [
    'path',
    {
      d: 'M8 17C9.83846 14.4046 14.1188 14.263 16 17M14.5 9.5C14.5 10.8807 13.3807 12 12 12C10.6193 12 9.5 10.8807 9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5Z'
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

IdentificationIcon.displayName = 'IdentificationIcon';
export default IdentificationIcon;
