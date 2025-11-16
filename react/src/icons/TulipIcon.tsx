import React from 'react';
import config from '../config';

interface TulipIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TulipIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tulip)
 * @see {@link https://clicons.dev/icon/tulip}
 */
const TulipIcon = React.forwardRef<SVGSVGElement, TulipIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 21C12 17.6863 14.6863 15 18 15'
    }
  ],
  [
    'path',
    {
      d: 'M12 21C12 17.6863 9.31371 15 6 15'
    }
  ],
  [
    'path',
    {
      d: 'M12 13V22'
    }
  ],
  [
    'path',
    {
      d: 'M12 13C14.7614 13 17 10.7614 17 8V4C14.2386 4 12 6.23858 12 9'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 4.5C14 3 12 2 12 2C12 2 10 3 9.5 4.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 13C9.23858 13 7 10.7614 7 8V4C8.36273 4 9.59812 4.54516 10.5 5.42928'
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

TulipIcon.displayName = 'TulipIcon';
export default TulipIcon;
