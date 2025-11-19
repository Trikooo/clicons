import React from 'react';
import config from '../config';

interface Scooter4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Scooter4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/scooter4)
 * @see {@link https://clicons.dev/icon/scooter4}
 */
const Scooter4Icon = React.forwardRef<SVGSVGElement, Scooter4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '4',
      cy: '18',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '20',
      cy: '18',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M6.51383 18H13.2887C14.0213 18 14.3876 18 14.6328 17.8445C14.878 17.689 15.0854 17.2491 15.5002 16.3693C15.735 15.8712 16.0361 15.411 16.3921 15M16.3921 15L4 16M16.3921 15C17.0623 14.2264 17.9273 13.6269 18.913 13.2759C19.4501 13.0846 19.7186 12.9889 19.8093 12.8143C19.8999 12.6397 19.8331 12.3991 19.6995 11.918L18.1691 6.4088C17.9184 5.50632 17.7931 5.05508 17.5225 4.72715C17.3256 4.4885 17.076 4.29879 16.7934 4.17293C16.405 4 15.9366 4 15 4'
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

Scooter4Icon.displayName = 'Scooter4Icon';
export default Scooter4Icon;
