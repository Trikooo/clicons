import React from 'react';
import config from '../config';

interface EncryptIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EncryptIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/encrypt)
 * @see {@link https://clicons.dev/icon/encrypt}
 */
const EncryptIcon = React.forwardRef<SVGSVGElement, EncryptIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 16L20 14H10.5322C9.7959 12.5183 8.26687 11.5 6.5 11.5C4.01471 11.5 2 13.5147 2 16C2 18.4852 4.01471 20.5 6.5 20.5C8.26685 20.5 9.79587 19.4817 10.5322 18H16.5L17.75 16.7073L19 18H20L22 16Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 16H7'
    }
  ],
  [
    'path',
    {
      d: 'M3 3.5V8.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 7V5C6 4.17157 6.67157 3.5 7.5 3.5C8.32843 3.5 9 4.17157 9 5V7C9 7.82843 8.32843 8.5 7.5 8.5C6.67157 8.5 6 7.82843 6 7Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 3.5V8.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 3.5V8.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 7V5C18 4.17157 18.6716 3.5 19.5 3.5C20.3284 3.5 21 4.17157 21 5V7C21 7.82843 20.3284 8.5 19.5 8.5C18.6716 8.5 18 7.82843 18 7Z'
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

EncryptIcon.displayName = 'EncryptIcon';
export default EncryptIcon;
