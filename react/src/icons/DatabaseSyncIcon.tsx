import React from 'react';
import config from '../config';

interface DatabaseSyncIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DatabaseSyncIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/database-sync)
 * @see {@link https://clicons.dev/icon/database-sync}
 */
const DatabaseSyncIcon = React.forwardRef<SVGSVGElement, DatabaseSyncIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'ellipse',
    {
      cx: '10',
      cy: '4.99982',
      rx: '8',
      ry: '3'
    }
  ],
  [
    'path',
    {
      d: 'M5 10.8419C5.60158 11.0227 6.27434 11.1716 7 11.2818'
    }
  ],
  [
    'path',
    {
      d: 'M5 17.8419C5.60158 18.0227 6.27434 18.1716 7 18.2818'
    }
  ],
  [
    'path',
    {
      d: 'M12 15.4996L13.1363 16.965C13.708 14.8316 15.9014 13.5656 18.0352 14.1373C19.1275 14.4299 19.9925 15.1473 20.5 16.064M22 20.4984L20.8637 19.035C20.2919 21.1684 18.0986 22.4344 15.9647 21.8627C14.8978 21.5769 14.0477 20.8858 13.5359 19.9995'
    }
  ],
  [
    'path',
    {
      d: 'M18 4.99982V11.008M2 4.99982V19.019C2 20.5509 5.05369 21.815 9 21.9998'
    }
  ],
  [
    'path',
    {
      d: 'M2 11.9998C2 13.5416 5.05369 14.8138 9 14.9998'
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

DatabaseSyncIcon.displayName = 'DatabaseSyncIcon';
export default DatabaseSyncIcon;
