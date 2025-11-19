import React from 'react';
import config from '../config';

interface NanoTechnologyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NanoTechnologyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/nano-technology)
 * @see {@link https://clicons.dev/icon/nano-technology}
 */
const NanoTechnologyIcon = React.forwardRef<SVGSVGElement, NanoTechnologyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '3.5',
      r: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '20.5',
      r: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '3.5',
      cy: '7.5',
      r: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '20.5',
      cy: '7.5',
      r: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '20.5',
      cy: '16.5',
      r: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '3.5',
      cy: '16.5',
      r: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z'
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

NanoTechnologyIcon.displayName = 'NanoTechnologyIcon';
export default NanoTechnologyIcon;
