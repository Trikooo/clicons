import React from 'react';
import config from '../config';

interface ShakaIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShakaIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shaka)
 * @see {@link https://clicons.dev/icon/shaka}
 */
const ShakaIcon = React.forwardRef<SVGSVGElement, ShakaIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.329 5.95241L10.5 8.14663C11.8897 8.14663 12.5845 8.14663 13.1133 8.36021C14.0353 8.73264 14.7191 9.5491 14.9405 10.542C15.0675 11.1113 14.9644 11.8179 14.7583 13.2311L14 17.4011H19.25C20.2165 17.4011 21 18.2067 21 19.2005C21 20.1943 20.2165 21 19.25 21H11.0505C8.20258 21 6.7786 21 5.69477 20.4208C4.78184 19.9329 4.03745 19.1673 3.56312 18.2282C3 17.1134 3 15.6488 3 12.7195C3 11.1625 3 10.384 3.25654 9.68332C3.33566 9.46725 3.43232 9.25841 3.54552 9.05902C3.91257 8.41248 4.50018 7.92155 5.67536 6.93972L9.91166 3.40042C10.5469 2.86973 11.4559 2.86619 12.095 3.39191C12.8631 4.02379 12.9692 5.18442 12.329 5.95241Z'
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

ShakaIcon.displayName = 'ShakaIcon';
export default ShakaIcon;
