import React from 'react';
import config from '../config';

interface ArtificialIntelligenceIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArtificialIntelligenceIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/artificial-intelligence)
 * @see {@link https://clicons.dev/icon/artificial-intelligence}
 */
const ArtificialIntelligenceIcon = React.forwardRef<SVGSVGElement, ArtificialIntelligenceIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 21.9995V21.4995C16 20.395 16.9321 19.5 17.9223 19.0106C18.8846 18.5349 19.6943 17.7507 19.7965 16.8308L20 14.9995L22 13.9995L19.5 10.2495C19.5 5.94601 16.2049 2.41209 12 2.03317M6.5 16.9957V21.9995M6.5 16.9957C5.46656 16.2668 4.60808 15.3063 4 14.1898M6.5 16.9957C7.25065 17.5253 8.09362 17.9326 9 18.189'
    }
  ],
  [
    'path',
    {
      d: 'M8 4H6C5.05719 4 4.58579 4 4.29289 4.29289C4 4.58579 4 5.05719 4 6V8C4 8.94281 4 9.41421 4.29289 9.70711C4.58579 10 5.05719 10 6 10H8C8.94281 10 9.41421 10 9.70711 9.70711C10 9.41421 10 8.94281 10 8V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 9.99997V12M8.5 9.99997V12M5.5 1.99997V3.99997M8.5 1.99997V3.99997M4 5.49997H2M4 8.49997H2M12 5.49997H10M12 8.49997H10'
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

ArtificialIntelligenceIcon.displayName = 'ArtificialIntelligenceIcon';
export default ArtificialIntelligenceIcon;
