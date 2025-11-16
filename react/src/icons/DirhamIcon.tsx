import React from 'react';
import config from '../config';

interface DirhamIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DirhamIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dirham)
 * @see {@link https://clicons.dev/icon/dirham}
 */
const DirhamIcon = React.forwardRef<SVGSVGElement, DirhamIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12.001C22 17.5236 17.5229 22.001 12 22.001C6.47713 22.001 2 17.5236 2 12.001C2 6.47811 6.47713 2.00098 12 2.00098C17.5229 2.00098 22 6.47811 22 12.001Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.6904 9.00098L17.1609 10.704C17.9481 11.6155 17.2771 12.9999 16.048 13.0005L15 13.001'
    }
  ],
  [
    'path',
    {
      d: 'M9 8.00098V12.999'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 17.5007H11M9.5 17.5007H8M9.5 17.5007C9.16667 17.1673 8.69989 16.3005 9.5 15.5007C10.1328 14.8681 11 15.5015 11 15.5015'
    }
  ],
  [
    'path',
    {
      d: 'M12 13.001V13.011'
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

DirhamIcon.displayName = 'DirhamIcon';
export default DirhamIcon;
