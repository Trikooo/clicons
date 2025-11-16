import React from 'react';
import config from '../config';

interface AlAqsaMosqueIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlAqsaMosqueIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/al-aqsa-mosque)
 * @see {@link https://clicons.dev/icon/al-aqsa-mosque}
 */
const AlAqsaMosqueIcon = React.forwardRef<SVGSVGElement, AlAqsaMosqueIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'rect',
    {
      x: '6',
      y: '12',
      width: '12',
      height: '10'
    }
  ],
  [
    'path',
    {
      d: 'M14 22V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22'
    }
  ],
  [
    'path',
    {
      d: 'M18 12L20.7022 13.0133C21.7801 13.4175 22 13.7348 22 14.886V22H18V12Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 14.886C2 13.7348 2.21988 13.4175 3.29775 13.0133L6 12V22H2V14.886Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.208 9.5C17.3133 6.36054 15.1439 3 12 3C8.85611 3 6.68666 6.36054 7.79198 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 3V2'
    }
  ],
  [
    'path',
    {
      d: 'M8 12V10M16 12V10'
    }
  ],
  [
    'path',
    {
      d: 'M7 9.5H17'
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

AlAqsaMosqueIcon.displayName = 'AlAqsaMosqueIcon';
export default AlAqsaMosqueIcon;
