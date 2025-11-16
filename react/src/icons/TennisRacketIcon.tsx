import React from 'react';
import config from '../config';

interface TennisRacketIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TennisRacketIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tennis-racket)
 * @see {@link https://clicons.dev/icon/tennis-racket}
 */
const TennisRacketIcon = React.forwardRef<SVGSVGElement, TennisRacketIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5212 14.8395L7.56291 16.438L9.16124 8.4792M18.8695 12.9044C16.3327 15.4414 12.5361 15.7578 10.3896 13.6111C8.24309 11.4644 8.55947 7.6676 11.0963 5.13063C13.6331 2.59366 17.4296 2.27726 19.5762 4.42392C21.7227 6.57059 21.4063 10.3674 18.8695 12.9044ZM7.03298 15.9067L8.09296 16.9668C8.2881 17.1619 8.2881 17.4783 8.09296 17.6735L4.913 20.8536C4.71786 21.0488 4.40148 21.0488 4.20634 20.8536L3.14635 19.7936C2.95122 19.5984 2.95122 19.282 3.14635 19.0869L6.32632 15.9067C6.52146 15.7115 6.83784 15.7115 7.03298 15.9067Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.5071 7.48413L16.5 7.4912M13.5 10.5003L13.4929 10.5074M16.5 10.5003L16.4929 10.5074M13.5071 7.4924L13.5 7.49947'
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

TennisRacketIcon.displayName = 'TennisRacketIcon';
export default TennisRacketIcon;
