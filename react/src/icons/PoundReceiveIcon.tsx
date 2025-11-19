import React from 'react';
import config from '../config';

interface PoundReceiveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PoundReceiveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pound-receive)
 * @see {@link https://clicons.dev/icon/pound-receive}
 */
const PoundReceiveIcon = React.forwardRef<SVGSVGElement, PoundReceiveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.25 13.025H21.75M14.25 13.025C14.25 13.7252 16.25 15.025 17.25 15.525M14.25 13.025C14.25 12.3248 16.4167 11.025 17.25 10.525'
    }
  ],
  [
    'path',
    {
      d: 'M12.662 8.52496C12.662 6.40432 10.9917 3.91079 8.25 4.00226C7.52476 4.02646 6.72455 4.25839 5.86047 4.767C4.4716 5.68473 2.67966 8.73584 4.84287 11.9369C5.89496 13.4937 6.86653 13.525 9.75 13.525H2.25M6.703 14.0072C6.16468 15.5014 4.53524 18.8987 2.32404 19.9869H11.2098C11.6185 19.9869 12.8337 20.1991 14.229 18.924'
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

PoundReceiveIcon.displayName = 'PoundReceiveIcon';
export default PoundReceiveIcon;
