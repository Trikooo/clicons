import React from 'react';
import config from '../config';

interface ImageNotFound2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ImageNotFound2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/image-not-found2)
 * @see {@link https://clicons.dev/icon/image-not-found2}
 */
const ImageNotFound2Icon = React.forwardRef<SVGSVGElement, ImageNotFound2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.8984 13C10.0813 14.8881 8.10749 18.0404 5.89844 21'
    }
  ],
  [
    'path',
    {
      d: 'M3.776 3.5C2.5 4.93424 2.5 7.23263 2.5 11.7454C2.5 16.3438 2.5 18.6429 3.85001 20.0715C5.20003 21.5 7.37284 21.5 11.7185 21.5C15.972 21.5 18.1439 21.3279 19.5 19.9883'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 12.0144C18.0399 11.9084 19.6963 12.3315 21.497 13.6201M21.497 13.6201C21.5 13.1151 21.5 12.5761 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C9.59086 2.5 7.82972 2.5 6.5 2.71659M21.497 13.6201C21.4876 15.2267 21.4482 16.4882 21.2834 17.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 2L22 22'
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

ImageNotFound2Icon.displayName = 'ImageNotFound2Icon';
export default ImageNotFound2Icon;
