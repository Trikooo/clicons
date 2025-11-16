import React from 'react';
import config from '../config';

interface OctagonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name OctagonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/octagon)
 * @see {@link https://clicons.dev/icon/octagon}
 */
const OctagonIcon = React.forwardRef<SVGSVGElement, OctagonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.5145 2C14.7408 2 15.3539 2 15.9052 2.22836C16.4565 2.45672 16.8901 2.89027 17.7572 3.75736L20.2424 6.24264C21.1095 7.10973 21.5431 7.54328 21.7714 8.09459C21.9998 8.6459 21.9998 9.25903 21.9998 10.4853V13.5147C21.9998 14.741 21.9998 15.3541 21.7714 15.9054C21.5431 16.4567 21.1095 16.8903 20.2425 17.7574L17.7572 20.2426C16.8901 21.1097 16.4565 21.5433 15.9052 21.7716C15.3539 22 14.7408 22 13.5145 22H10.4851C9.25887 22 8.64573 22 8.0944 21.7716C7.54308 21.5433 7.10953 21.1097 6.24244 20.2426L3.75729 17.7573C2.89023 16.8903 2.4567 16.4567 2.22835 15.9054C2 15.3541 2 14.741 2 13.5148V10.4852C2 9.259 2 8.64589 2.22835 8.09458C2.4567 7.54328 2.89023 7.10974 3.75729 6.24265L6.24244 3.75743C7.10953 2.8903 7.54308 2.45674 8.0944 2.22837C8.64573 2 9.25887 2 10.4851 2H13.5145Z'
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

OctagonIcon.displayName = 'OctagonIcon';
export default OctagonIcon;
