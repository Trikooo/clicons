import React from 'react';
import config from '../config';

interface SqlIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SqlIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sql)
 * @see {@link https://clicons.dev/icon/sql}
 */
const SqlIcon = React.forwardRef<SVGSVGElement, SqlIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.41465 10C8.20873 9.4174 7.65311 9 7 9C6.17157 9 5.5 9.67157 5.5 10.5C5.5 11.3284 6.17157 12 7 12C7.82843 12 8.5 12.6716 8.5 13.5C8.5 14.3284 7.82843 15 7 15C6.34689 15 5.79127 14.5826 5.58535 14'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 15C11.6716 15 11 14.3284 11 13.5V10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5V13.5C14 14.3284 13.3284 15 12.5 15ZM12.5 15L14 16.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 9V13C16.5 13.9428 16.5 14.4142 16.7929 14.7071C17.0858 15 17.5572 15 18.5 15'
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

SqlIcon.displayName = 'SqlIcon';
export default SqlIcon;
