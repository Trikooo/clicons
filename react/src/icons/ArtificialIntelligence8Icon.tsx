import React from 'react';
import config from '../config';

interface ArtificialIntelligence8IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArtificialIntelligence8Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/artificial-intelligence8)
 * @see {@link https://clicons.dev/icon/artificial-intelligence8}
 */
const ArtificialIntelligence8Icon = React.forwardRef<SVGSVGElement, ArtificialIntelligence8IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.60059 6.11211C9.92247 5.29596 11.0775 5.29596 11.3994 6.11211L12.3103 8.4216C12.8999 9.91665 14.0833 11.1001 15.5784 11.6897L17.8879 12.6006C18.704 12.9225 18.704 14.0775 17.8879 14.3994L15.5784 15.3103C14.0833 15.8999 12.8999 17.0833 12.3103 18.5784L11.3994 20.8879C11.0775 21.704 9.92247 21.704 9.60059 20.8879L8.68974 18.5784C8.1001 17.0833 6.91665 15.8999 5.4216 15.3103L3.11211 14.3994C2.29596 14.0775 2.29596 12.9225 3.11211 12.6006L5.4216 11.6897C6.91665 11.1001 8.1001 9.91665 8.68974 8.4216L9.60059 6.11211Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.1627 2.72954C18.2834 2.42349 18.7166 2.42349 18.8373 2.72954L19.1788 3.5956C19.4 4.15624 19.8438 4.60004 20.4044 4.82115L21.2705 5.16272C21.5765 5.28343 21.5765 5.71657 21.2705 5.83728L20.4044 6.17885C19.8438 6.39996 19.4 6.84376 19.1788 7.4044L18.8373 8.27046C18.7166 8.57651 18.2834 8.57651 18.1627 8.27046L17.8212 7.4044C17.6 6.84376 17.1562 6.39996 16.5956 6.17885L15.7295 5.83728C15.4235 5.71657 15.4235 5.28343 15.7295 5.16272L16.5956 4.82115C17.1562 4.60004 17.6 4.15624 17.8212 3.5956L18.1627 2.72954Z'
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

ArtificialIntelligence8Icon.displayName = 'ArtificialIntelligence8Icon';
export default ArtificialIntelligence8Icon;
