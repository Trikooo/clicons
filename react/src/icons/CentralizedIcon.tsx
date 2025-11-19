import React from 'react';
import config from '../config';

interface CentralizedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CentralizedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/centralized)
 * @see {@link https://clicons.dev/icon/centralized}
 */
const CentralizedIcon = React.forwardRef<SVGSVGElement, CentralizedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11.9998 7C9.23833 7 6.99976 9.23857 6.99976 12C6.99976 14.7614 9.23833 17 11.9998 17C14.7612 17 16.9998 14.7614 16.9998 12C16.9998 9.23858 14.7612 7 11.9998 7Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.7364 6.26337L21.4998 2.5M17.7364 6.26337C17.2968 5.82377 17.5831 4.02148 17.6964 3M17.7364 6.26337C18.176 6.70297 19.9783 6.41666 20.9998 6.30336'
    }
  ],
  [
    'path',
    {
      d: 'M6.26313 17.7366L2.49976 21.5M6.26313 17.7366C5.82353 17.297 4.02124 17.5833 2.99976 17.6966M6.26313 17.7366C6.70273 18.1762 6.41642 19.9785 6.30312 21'
    }
  ],
  [
    'path',
    {
      d: 'M17.7364 17.7366L21.4998 21.5M17.7364 17.7366C18.176 17.297 19.9783 17.5833 20.9998 17.6966M17.7364 17.7366C17.2968 18.1762 17.5831 19.9785 17.6964 21'
    }
  ],
  [
    'path',
    {
      d: 'M6.26313 6.26337L2.49976 2.5M6.26313 6.26337C6.70273 5.82377 6.41642 4.02148 6.30312 3M6.26313 6.26337C5.82353 6.70297 4.02124 6.41666 2.99976 6.30336'
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

CentralizedIcon.displayName = 'CentralizedIcon';
export default CentralizedIcon;
